function doGet(e) {
  // Ganti dengan ID Spreadsheet Anda (kumpulan huruf/angka pada URL Google Sheet)
  var sheetId = 'ID_SPREADSHEET_ANDA_DI_SINI'; 
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  
  var rowData = [
    e.parameter.timestamp,
    e.parameter.nama,
    e.parameter.absen,
    e.parameter.nilai,
    e.parameter.benar,
    e.parameter.salah,
    e.parameter.kosong,
    e.parameter.essayMarked,
    e.parameter.jawaban,
    e.parameter.mataPelajaran,
    e.parameter.kelas,
    e.parameter.tahunAjaran
  ];
  
  sheet.appendRow(rowData);
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}