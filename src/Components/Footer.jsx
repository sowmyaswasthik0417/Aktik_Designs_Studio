import React from 'react'
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  SvgIcon,
  Divider,
} from '@mui/material'

// Tweak these to match your site theme
const BG = '#14110f'
const TEXT_MUTED = 'rgba(255,255,255,0.7)'
const BORDER = 'rgba(255,255,255,0.12)'
const ACCENT = '#c9a27a'

/* ---------- Inline SVG icons ---------- */
const PinterestIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
  </SvgIcon>
)

const InstagramIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </g>
  </SvgIcon>
)

const WhatsAppIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.2-1.7-1-.8.6a3.5 3.5 0 0 1-1.4-1.4l.6-.8-1-1.7L9 9.5z" />
    </g>
  </SvgIcon>
)

const PhoneIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    />
  </SvgIcon>
)

const MailIcon = (props) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22,6 12,13 2,6" />
    </g>
  </SvgIcon>
)

/* ---------- Shared styles ---------- */
const columnTitleSx = {
  color: '#fff',
  fontSize: '1.15rem',
  fontWeight: 600,
  mb: 2.5,
}

const listSx = {
  listStyle: 'none',
  m: 0,
  p: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 1.25,
}

const linkSx = {
  color: TEXT_MUTED,
  textDecoration: 'none',
  fontSize: '0.95rem',
  transition: 'color 0.2s ease',
  '&:hover': { color: ACCENT },
}

const socialBtnSx = {
  width: 40,
  height: 40,
  color: '#fff',
  border: `1px solid ${BORDER}`,
  transition: 'all 0.25s ease',
  '&:hover': {
    color: BG,
    backgroundColor: ACCENT,
    borderColor: ACCENT,
  },
  '& svg': { fontSize: 20 },
}

export default function Footer() {
  const email = "aktikdesignstudio@gmail.com";
  const subject = "Enquiry about Furniture & Interior Design Services";
  const body = `Hello Aktik Design Studio Team,

I came across your website and I'm interested in your interior design services. I'd love to know more about what you
offer.

My requirement:
(e.g., living room furniture, bedroom set, modular kitchen, full home interior)

Preferred budget range:

Location:

Please share details about your collections, pricing, and the next steps to get started. I'd also appreciate it if we
could schedule a call or visit to discuss further.

My details:
Name:
Phone:

Thank you, and I look forward to hearing from you.

Best regards,`;

  const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const socials = [
    { label: 'Pinterest', href: 'https://pin.it/7ExwNgzA2', Icon: PinterestIcon, external: true },
    { label: 'Instagram', href: 'https://www.instagram.com/aktik_designs/?hl=en', Icon: InstagramIcon, external: true },
    { label: 'WhatsApp', href: 'https://wa.me/917259759858', Icon: WhatsAppIcon, external: true },
    { label: 'Call us', href: 'tel:+917259759858', Icon: PhoneIcon, external: false },
    { label: 'Email us', href: gmailLink, Icon: MailIcon, external: true },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/AboutUs' },
    { label: 'Services', href: '/Services' },
    // { label: 'Projects', href: '/Projects' },
    // { label: 'Products', href: '/Products' },
    { label: 'Testimonials', href: '/Testimonials' },
    { label: 'Contact Us', href: '/Contact' },
  ];

  const serviceLinks = [
    'Residential Interiors',
    'Modular Kitchens',
    'Bedrooms',
    'Living Rooms',
    'Wardrobes',
    'Custom Furniture',
  ];

  return (
    <Box component="footer" sx={{ backgroundColor: BG, color: '#fff', pt: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 2fr' },
            gap: { xs: 5, lg: 8 },
          }}
        >
          {/* Brand column */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box
                component="img"
                src="../assets/images/logo_white1.avif"
                alt="Aktik Designs Studio Logo"
                sx={{ width: 100, height: 'auto', objectFit: 'contain', flexShrink: 0 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 2.5 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ m: 0, fontWeight: 600, lineHeight: 1.2, color: '#fff' }}
                >
                  aktik.
                </Typography>
                <Typography
                  sx={{
                    m: 0,
                    mt: 0.5,
                    fontSize: 9,
                    fontWeight: 500,
                    letterSpacing: '3px',
                    color: '#fff',
                    whiteSpace: 'nowrap',
                  }}
                >
                  DESIGNS STUDIO
                </Typography>
              </Box>
            </Box>

            <Typography sx={{ color: TEXT_MUTED, fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 360, mb: 3 }}>
              Crafted with passion deliver elegant furniture experiences for modern homes and lifestyles.
            </Typography>

            <Box component="ul" sx={{ ...listSx, flexDirection: 'row', flexWrap: 'wrap', gap: 1.5 }}>
              {socials.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <IconButton
                    component="a"
                    href={href}
                    aria-label={label}
                    sx={socialBtnSx}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <Icon />
                  </IconButton>
                </li>
              ))}
            </Box>
          </Box>

          {/* Links columns */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: '1fr 1fr 1.5fr' },
              gap: { xs: 4, md: 5 },
            }}
          >
            {/* Quick Links */}
            <Box>
              <Typography variant="h2" sx={columnTitleSx}>Quick Links</Typography>
              <Box component="ul" sx={listSx}>
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} sx={linkSx}>{label}</Link>
                  </li>
                ))}
              </Box>
            </Box>

            {/* Services */}
            <Box>
              <Typography variant="h2" sx={columnTitleSx}>Services</Typography>
              <Box component="ul" sx={listSx}>
                {serviceLinks.map((label) => (
                  <li key={label}>
                    <Link href="/Services" sx={linkSx}>{label}</Link>
                  </li>
                ))}
              </Box>
            </Box>

            {/* Contact Information */}
            <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1', md: 'auto' } }}>
              <Typography variant="h2" sx={columnTitleSx}>Contact Information</Typography>
              <Box component="ul" sx={listSx}>
                <Typography component="li" sx={{ color: TEXT_MUTED, fontSize: '0.95rem', lineHeight: 1.7 }}>
                  1st Floor, Prime towers, opp. to Mangalore nursing home, Bendoorwell, Kankanady, Mangaluru,
                  Karnataka 575002
                </Typography>
                <li><Link href="tel:7259759858" sx={linkSx}>+91 7259759858</Link></li>
                <li><Link href="tel:7760587309" sx={linkSx}>+91 7760587309</Link></li>
                <li>
                  <Link href="mailto:aktikdesignstudio@gmail.com" sx={{ ...linkSx, wordBreak: 'break-all' }}>
                    aktikdesignstudio@gmail.com
                  </Link>
                </li>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Copyright */}
      <Divider sx={{ borderColor: BORDER, mt: { xs: 5, md: 8 } }} />
      <Container maxWidth="lg">
        <Box sx={{ py: 3, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography sx={{ color: TEXT_MUTED, fontSize: '0.875rem' }}>
            Copyright © 2026 All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}