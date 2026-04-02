/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Global Freedom Capital"

interface ContactNotificationProps {
  name?: string
  email?: string
  phone?: string
  type?: string
  interest?: string
  message?: string
}

const ContactNotificationEmail = ({ name, email, phone, type, interest, message }: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New inquiry from {name || 'a visitor'} — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Inquiry</Heading>
        <Text style={text}>A new inquiry has been submitted on {SITE_NAME}.</Text>
        <Hr style={hr} />
        <Section style={detailSection}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || '—'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
          {phone && (
            <>
              <Text style={label}>Phone</Text>
              <Text style={value}>{phone}</Text>
            </>
          )}
          <Text style={label}>Type</Text>
          <Text style={value}>{type || '—'}</Text>
          {interest && (
            <>
              <Text style={label}>Primary Interest</Text>
              <Text style={value}>{interest}</Text>
            </>
          )}
          <Text style={label}>Message</Text>
          <Text style={value}>{message || '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>This is an automated notification from {SITE_NAME}.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) => `New inquiry from ${data.name || 'a visitor'}`,
  displayName: 'Contact form notification',
  to: 'contact@globalfreedomcapital.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1 555 123 4567',
    type: 'Individual / Family',
    interest: 'Citizenship by Investment',
    message: 'I am interested in Caribbean CBI programs for my family.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '32px 28px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#0d0f1a', margin: '0 0 16px', fontFamily: "'Playfair Display', Georgia, serif" }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 16px' }
const hr = { borderTop: '1px solid hsl(40, 60%, 38%)', margin: '24px 0', opacity: 0.3 }
const detailSection = { margin: '0' }
const label = { fontSize: '11px', color: '#666666', textTransform: 'uppercase' as const, letterSpacing: '1.5px', margin: '12px 0 2px' }
const value = { fontSize: '14px', color: '#0d0f1a', margin: '0 0 8px', lineHeight: '1.5' }
const footer = { fontSize: '12px', color: '#999999', margin: '24px 0 0' }
