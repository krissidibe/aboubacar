import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { content, fileName } = await req.json();
    
    if (!content || !fileName) {
      return NextResponse.json({ error: 'Contenu ou nom de fichier manquant' }, { status: 400 });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const folderName = `upload_${timestamp}`;
    const folderPath = path.join(process.cwd(), 'public', 'uploads', folderName);
    
    await fs.mkdir(folderPath, { recursive: true });
    
    const filePath = path.join(folderPath, fileName);
    
    await fs.writeFile(filePath, content);

    return NextResponse.json({ message: 'Fichier enregistré avec succès', folderName }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du fichier:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'enregistrement du fichier' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const fileName = searchParams.get('fileName');
    const folderName = searchParams.get('folderName');

    if (!fileName || !folderName) {
      return NextResponse.json({ error: 'Nom de fichier ou de dossier manquant' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'public', 'uploads', folderName, fileName);
    
    const fileContent = await fs.readFile(filePath, 'utf-8');

    return NextResponse.json({ content: fileContent }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier:', error);
    return NextResponse.json({ error: 'Erreur lors de la lecture du fichier' }, { status: 500 });
  }
}
