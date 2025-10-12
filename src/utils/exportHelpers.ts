import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export interface DonationRecord {
  id: number;
  date: string;
  location: string;
  type: string;
  status: string;
}

export const exportToPDF = (donations: DonationRecord[], donorName: string, bloodType: string) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(220, 38, 38);
  doc.text('Aashayein Blood Donation Platform', 105, 15, { align: 'center' });
  
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('Donation History Report', 105, 25, { align: 'center' });
  
  // Donor Info
  doc.setFontSize(12);
  doc.text(`Donor: ${donorName}`, 20, 40);
  doc.text(`Blood Type: ${bloodType}`, 20, 47);
  doc.text(`Total Donations: ${donations.length}`, 20, 54);
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 61);
  
  // Table
  autoTable(doc, {
    startY: 70,
    head: [['Date', 'Location', 'Type', 'Status']],
    body: donations.map(d => [
      new Date(d.date).toLocaleDateString(),
      d.location,
      d.type,
      d.status
    ]),
    theme: 'grid',
    headStyles: { fillColor: [220, 38, 38] },
  });
  
  doc.save(`donation-history-${Date.now()}.pdf`);
};

export const exportToCSV = (donations: DonationRecord[]) => {
  const headers = ['Date', 'Location', 'Type', 'Status'];
  const rows = donations.map(d => [
    new Date(d.date).toLocaleDateString(),
    d.location,
    d.type,
    d.status
  ]);
  
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `donation-history-${Date.now()}.csv`;
  link.click();
};
