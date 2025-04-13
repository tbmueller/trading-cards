import html2canvas from 'html2canvas';

// from https://www.robinwieruch.de/react-component-to-image/
export async function downloadImage(cardRef: React.RefObject<HTMLDivElement | null>) {
  const element = cardRef.current;
  if (!element) return;
  const canvas = await html2canvas(element, { backgroundColor: null });

  const data = canvas.toDataURL('image/png');
  const link = document.createElement('a');

  if (typeof link.download === 'string') {
    link.href = data;
    link.download = 'image.png';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(data);
  }
}