const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

(async () => {
  console.log('Starting Multi-Page PDF generation...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });

  const personas = [0, 1, 2];
  const tempFiles = [];

  console.log('Navigating to http://localhost:3000...');
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (error) {
    console.error('Failed to load page. Make sure the Next.js dev server is running on localhost:3000');
    await browser.close();
    process.exit(1);
  }

  // Inject CSS to fix layout and kill animations
  const css = `
    /* Kill all transitions and animations for a clean static snapshot */
    *, *::before, *::after {
      transition-property: none !important;
      transform: none !important;
      animation: none !important;
      transition-duration: 0s !important;
    }
    
    /* Force visibility on animated elements */
    .text-animate, .accent-line, .story-animate, [class*="Gsap"] {
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
    }

    @media print {
      @page { margin: 0; }
      body { 
        -webkit-print-color-adjust: exact; 
        print-color-adjust: exact; 
        background: white !important;
      }
      /* Hide interactive UI elements */
      header, 
      .pointer-events-auto,
      nav,
      .absolute.bottom-0.left-0.right-0,
      button { display: none !important; }
      
      section { page-break-inside: avoid; position: relative !important; }
      .card-lift { page-break-inside: avoid; }
    }
  `;
  await page.addStyleTag({ content: css });

  for (const i of personas) {
    console.log(`Capturing Persona ${i}...`);
    
    // Set persona state
    await page.evaluate((idx) => {
      if (window.setPersonaIndex) {
        window.setPersonaIndex(idx);
      }
      if (window.gsap) {
        window.gsap.globalTimeline.progress(1);
      }
    }, i);

    // Wait for state change to reflect
    await new Promise(r => setTimeout(r, 1000));

    const tempPath = `temp_persona_${i}.pdf`;
    await page.pdf({
      path: tempPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
    tempFiles.push(tempPath);
  }

  console.log('Merging PDFs...');
  const finalPdf = await PDFDocument.create();

  // For each persona, we only want the FIRST page (the Hero)
  // Except for the last persona where we might want the rest of the site
  // Actually, let's take Page 1 from each, and then pages 2+ from the first one.
  
  for (let i = 0; i < tempFiles.length; i++) {
    const bytes = fs.readFileSync(tempFiles[i]);
    const doc = await PDFDocument.load(bytes);
    
    if (i < tempFiles.length - 1) {
      // Just take the first page (Hero)
      const [firstPage] = await finalPdf.copyPages(doc, [0]);
      finalPdf.addPage(firstPage);
    } else {
      // Take ALL pages from the last one (Hero + rest of site)
      const pages = await finalPdf.copyPages(doc, doc.getPageIndices());
      pages.forEach(p => finalPdf.addPage(p));
    }
  }

  const pdfBytes = await finalPdf.save();
  fs.writeFileSync('Nimo_Portfolio_MultiState.pdf', pdfBytes);

  // Cleanup
  tempFiles.forEach(f => fs.unlinkSync(f));

  await browser.close();
  console.log('Success! Generated: Nimo_Portfolio_MultiState.pdf');
})();
