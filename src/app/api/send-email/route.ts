import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, subject, html, replyTo } = body;

    // Vérification des variables d'environnement
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: 'Configuration email manquante (GMAIL_USER ou GMAIL_APP_PASSWORD)' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: to || process.env.GMAIL_USER, // L'email arrive chez vous par défaut, ou au destinataire spécifié
      replyTo: replyTo, // Pour pouvoir répondre directement au client
      subject: subject,
      html: html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
  }
}
