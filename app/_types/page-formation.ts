export interface Formation {
  certificateDescription: string;
  formationTitle: string;
  endDate: Date;
  startDate: Date;
  pdfCertificate: {
    url: string; // URL pública do PDF
    fileName: string; // Nome do arquivo (opcional)
  };
}

export interface FormationResponse {
  formations: Formation[];
}
