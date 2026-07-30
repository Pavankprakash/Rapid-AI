import fs from "fs";
import pdf from "pdf-parse-debugging-disabled";

export async function extractTextFromPDF(pdfPath) {
    const buffer = fs.readFileSync(pdfPath);

    const data = await pdf(buffer);

    fs.unlinkSync(pdfPath);

    return data.text;
}