const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting PDF generation...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:3000...');
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  } catch (error) {
    console.error('Failed to load page. Make sure the Next.js dev server (npm run dev) or production server is running on localhost:3000');
    await browser.close();
    process.exit(1);
  }

  // Wait extra time for GSAP animations and Framer Motion to settle
  console.log('Waiting for animations to settle...');
  await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 6000)));

  // Hide nav elements and force better print layout
  await page.addStyleTag({
    content: `
      @media print {
        @page { margin: 0; }
        body { 
          -webkit-print-color-adjust: exact; 
          print-color-adjust: exact; 
        }
        /* Hide header nav, interactive bottom bar, and arrows */
        header, 
        .pointer-events-auto,
        nav,
        .absolute.bottom-0.left-0.right-0 { display: none !important; }
        
        /* Attempt to keep sections whole */
        section { page-break-inside: avoid; }
        .card-lift { page-break-inside: avoid; }
      }
    `
  });

  console.log('Generating PDF...');
  await page.pdf({
    path: 'Nimo_Portfolio.pdf',
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log('PDF generated successfully as Nimo_Portfolio.pdf');
})();
