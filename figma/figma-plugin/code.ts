// ARCA.OS Design System Generator - Figma Plugin
// Genera automáticamente todos los componentes del Design System

// Design Tokens importados
const tokens = {
  color: {
    institutional: {
      "arca-red": "#C32B40",
      "arca-red-dark": "#9A2233",
      "arca-red-light": "#FDE7EA",
      "arca-brown": "#5D4037",
      "arca-gray-dark": "#424242",
      "arca-gray-light": "#E0E0E0"
    },
    culture: {
      turquoise: "#0AA4B4",
      lime: "#7FBC03",
      orange: "#FF9016",
      purple: "#843276",
      "red-intense": "#FF1826"
    },
    neutral: {
      0: "#FFFFFF",
      1: "#F8FAFC",
      2: "#F1F5F9",
      3: "#E2E8F0",
      4: "#CBD5E1",
      5: "#94A3B8",
      6: "#64748B",
      7: "#475569",
      8: "#334155",
      9: "#1E293B",
      10: "#0F172A"
    },
    semantic: {
      primary: "#C32B40",
      "primary-light": "#FDE7EA",
      success: "#7FBC03",
      "success-light": "#F0F9E6",
      warning: "#FF9016",
      "warning-light": "#FFF3E0",
      error: "#FF1826",
      "error-light": "#FFEBEE",
      info: "#0AA4B4",
      "info-light": "#E0F7FA"
    }
  },
  typography: {
    fontFamily: {
      primary: "Inter, Segoe UI, Roboto, -apple-system, Arial, sans-serif"
    },
    fontSize: {
      "2xs": 10,
      xs: 12,
      s: 14,
      base: 16,
      l: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 30,
      "4xl": 36,
      "5xl": 48,
      display: 56
    },
    fontWeight: {
      light: "Light",
      regular: "Regular",
      medium: "Medium",
      semibold: "Semi Bold",
      bold: "Bold",
      extrabold: "Extra Bold"
    },
    lineHeight: {
      xs: 1.1,
      s: 1.3,
      base: 1.5,
      l: 1.7
    }
  },
  spacing: {
    xs: 4,
    s: 8,
    base: 16,
    l: 24,
    xl: 32,
    "2xl": 48,
    "3xl": 64
  },
  borderRadius: {
    none: 0,
    xs: 2,
    s: 4,
    base: 8,
    rounded: 12,
    l: 16,
    xl: 24,
    "2xl": 32,
    pill: 9999,
    circle: "50%"
  }
};

// Helper: Crear estilos de color
function createColorStyles() {
  const styles: PaintStyle[] = [];

  // Institucionales
  Object.entries(tokens.color.institutional).forEach(([name, value]) => {
    const style = figma.createPaintStyle();
    style.name = `Color/Institutional/${name}`;
    style.paints = [{ type: 'SOLID', color: hexToRgb(value as string) }];
    styles.push(style);
  });

  // Cultura Arca
  Object.entries(tokens.color.culture).forEach(([name, value]) => {
    const style = figma.createPaintStyle();
    style.name = `Color/Culture/${name}`;
    style.paints = [{ type: 'SOLID', color: hexToRgb(value as string) }];
    styles.push(style);
  });

  // Neutrales
  Object.entries(tokens.color.neutral).forEach(([name, value]) => {
    const style = figma.createPaintStyle();
    style.name = `Color/Neutral/${name}`;
    style.paints = [{ type: 'SOLID', color: hexToRgb(value as string) }];
    styles.push(style);
  });

  // Semánticos
  Object.entries(tokens.color.semantic).forEach(([name, value]) => {
    const style = figma.createPaintStyle();
    style.name = `Color/Semantic/${name}`;
    style.paints = [{ type: 'SOLID', color: hexToRgb(value as string) }];
    styles.push(style);
  });

  return styles;
}

// Helper: Crear estilos de texto
function createTextStyles() {
  const styles: TextStyle[] = [];

  // Headings
  ["display", "5xl", "4xl", "3xl", "2xl", "xl", "l"].forEach((size) => {
    const style = figma.createTextStyle();
    style.name = `Typography/Heading/${size}`;
    style.fontSize = tokens.typography.fontSize[size as keyof typeof tokens.typography.fontSize];
    style.fontName = { family: "Inter", style: "Bold" };
    style.lineHeight = { value: tokens.typography.lineHeight.s * 100, unit: "PERCENT" };
    styles.push(style);
  });

  // Body
  ["base", "s", "xs"].forEach((size) => {
    const style = figma.createTextStyle();
    style.name = `Typography/Body/${size}`;
    style.fontSize = tokens.typography.fontSize[size as keyof typeof tokens.typography.fontSize];
    style.fontName = { family: "Inter", style: "Regular" };
    style.lineHeight = { value: tokens.typography.lineHeight.base * 100, unit: "PERCENT" };
    styles.push(style);
  });

  return styles;
}

// Helper: Convertir HEX a RGB
function hexToRgb(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : { r: 0, g: 0, b: 0 };
}

// Crear Logo ARCA.OS
function createLogo(): ComponentNode {
  const component = figma.createComponent();
  component.name = "Logo/ARCA.OS";
  component.resize(150, 40);
  component.layoutMode = "HORIZONTAL";
  component.primaryAxisAlignItems = "CENTER";
  component.itemSpacing = 6;
  component.paddingLeft = 0;
  component.paddingRight = 0;

  // Texto "ARCA"
  const textArca = figma.createText();
  textArca.name = "ARCA";
  textArca.characters = "ARCA";
  textArca.fontSize = 24;
  textArca.fontName = { family: "Inter", style: "Extra Bold" };
  textArca.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.neutral[9]) }];
  textArca.letterSpacing = { value: 1, unit: "PIXELS" };

  // Punto rojo
  const dot = figma.createEllipse();
  dot.name = "Dot";
  dot.resize(8, 8);
  dot.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.institutional["arca-red"]) }];

  // Texto "OS"
  const textOS = figma.createText();
  textOS.name = "OS";
  textOS.characters = "OS";
  textOS.fontSize = 24;
  textOS.fontName = { family: "Inter", style: "Extra Bold" };
  textOS.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.neutral[9]) }];
  textOS.letterSpacing = { value: 1, unit: "PIXELS" };

  component.appendChild(textArca);
  component.appendChild(dot);
  component.appendChild(textOS);

  return component;
}

// Crear componente Button
function createButton(variant: string, color: string): ComponentNode {
  const button = figma.createComponent();
  button.name = `Button/${variant}`;
  button.resize(120, 44);
  button.layoutMode = "HORIZONTAL";
  button.primaryAxisAlignItems = "CENTER";
  button.counterAxisAlignItems = "CENTER";
  button.paddingLeft = 24;
  button.paddingRight = 24;
  button.paddingTop = 12;
  button.paddingBottom = 12;
  button.itemSpacing = 8;
  button.cornerRadius = tokens.borderRadius.rounded;

  // Fondo
  if (variant === "Primary" || variant === "Success" || variant === "Danger") {
    button.fills = [{ type: 'SOLID', color: hexToRgb(color) }];
    button.strokes = [];
  } else {
    // Secondary/outline
    button.fills = [];
    button.strokes = [{ type: 'SOLID', color: hexToRgb(color) }];
    button.strokeWeight = 2;
  }

  // Texto
  const text = figma.createText();
  text.name = "Label";
  text.characters = variant;
  text.fontSize = tokens.typography.fontSize.base;
  text.fontName = { family: "Inter", style: "Semi Bold" };

  if (variant === "Primary" || variant === "Success" || variant === "Danger") {
    text.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.neutral[0]) }];
  } else {
    text.fills = [{ type: 'SOLID', color: hexToRgb(color) }];
  }

  button.appendChild(text);

  return button;
}

// Crear componente Badge
function createBadge(variant: string, color: string): ComponentNode {
  const badge = figma.createComponent();
  badge.name = `Badge/${variant}`;
  badge.resize(80, 24);
  badge.layoutMode = "HORIZONTAL";
  badge.primaryAxisAlignItems = "CENTER";
  badge.counterAxisAlignItems = "CENTER";
  badge.paddingLeft = 12;
  badge.paddingRight = 12;
  badge.paddingTop = 4;
  badge.paddingBottom = 4;
  badge.cornerRadius = tokens.borderRadius.pill;
  badge.fills = [{ type: 'SOLID', color: hexToRgb(color), opacity: 0.1 }];

  // Texto
  const text = figma.createText();
  text.name = "Label";
  text.characters = variant.toUpperCase();
  text.fontSize = tokens.typography.fontSize.xs;
  text.fontName = { family: "Inter", style: "Semi Bold" };
  text.fills = [{ type: 'SOLID', color: hexToRgb(color) }];

  badge.appendChild(text);

  return badge;
}

// Crear componente Input
function createInput(): ComponentNode {
  const input = figma.createComponent();
  input.name = "Input/Default";
  input.resize(320, 44);
  input.layoutMode = "HORIZONTAL";
  input.primaryAxisAlignItems = "CENTER";
  input.paddingLeft = 16;
  input.paddingRight = 16;
  input.paddingTop = 12;
  input.paddingBottom = 12;
  input.cornerRadius = tokens.borderRadius.rounded;
  input.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.neutral[0]) }];
  input.strokes = [{ type: 'SOLID', color: hexToRgb(tokens.color.neutral[3]) }];
  input.strokeWeight = 2;

  // Placeholder text
  const text = figma.createText();
  text.name = "Placeholder";
  text.characters = "Placeholder text";
  text.fontSize = tokens.typography.fontSize.base;
  text.fontName = { family: "Inter", style: "Regular" };
  text.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.neutral[5]) }];

  input.appendChild(text);

  return input;
}

// Crear componente Card
function createCard(): ComponentNode {
  const card = figma.createComponent();
  card.name = "Card/Default";
  card.resize(320, 200);
  card.layoutMode = "VERTICAL";
  card.itemSpacing = 0;
  card.cornerRadius = tokens.borderRadius.rounded;
  card.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.neutral[0]) }];
  card.effects = [{
    type: "DROP_SHADOW",
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 2 },
    radius: 8,
    visible: true,
    blendMode: "NORMAL"
  }];

  // Header
  const header = figma.createFrame();
  header.name = "Header";
  header.resize(320, 60);
  header.layoutMode = "HORIZONTAL";
  header.primaryAxisAlignItems = "CENTER";
  header.counterAxisAlignItems = "CENTER";
  header.paddingLeft = 16;
  header.paddingRight = 16;
  header.fills = [];

  const headerText = figma.createText();
  headerText.name = "Title";
  headerText.characters = "Card Title";
  headerText.fontSize = tokens.typography.fontSize.l;
  headerText.fontName = { family: "Inter", style: "Bold" };
  headerText.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.neutral[9]) }];

  header.appendChild(headerText);

  // Body
  const body = figma.createFrame();
  body.name = "Body";
  body.resize(320, 140);
  body.layoutMode = "VERTICAL";
  body.paddingLeft = 16;
  body.paddingRight = 16;
  body.paddingTop = 16;
  body.paddingBottom = 16;
  body.fills = [];

  const bodyText = figma.createText();
  bodyText.name = "Content";
  bodyText.characters = "Card content goes here. This is a placeholder for any content you want to add.";
  bodyText.fontSize = tokens.typography.fontSize.base;
  bodyText.fontName = { family: "Inter", style: "Regular" };
  bodyText.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.neutral[7]) }];
  bodyText.resize(288, 100);

  body.appendChild(bodyText);

  card.appendChild(header);
  card.appendChild(body);

  return card;
}

// Main: Generar todo el Design System
async function generateDesignSystem() {
  // Cargar fuente Inter
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });

  figma.notify("🚀 Generando Design System ARCA.OS...");

  // Crear estilos
  createColorStyles();
  createTextStyles();

  // Crear página de componentes
  const componentsPage = figma.createPage();
  componentsPage.name = "🎨 Components";
  figma.currentPage = componentsPage;

  // Crear frame principal
  const mainFrame = figma.createFrame();
  mainFrame.name = "ARCA.OS Design System";
  mainFrame.resize(1440, 2000);
  mainFrame.x = 0;
  mainFrame.y = 0;
  mainFrame.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.neutral[1]) }];
  mainFrame.layoutMode = "VERTICAL";
  mainFrame.itemSpacing = 48;
  mainFrame.paddingLeft = 48;
  mainFrame.paddingRight = 48;
  mainFrame.paddingTop = 48;
  mainFrame.paddingBottom = 48;

  // Título
  const title = figma.createText();
  title.name = "Title";
  title.characters = "ARCA.OS Design System";
  title.fontSize = tokens.typography.fontSize.display;
  title.fontName = { family: "Inter", style: "Extra Bold" };
  title.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.institutional["arca-red"]) }];
  mainFrame.appendChild(title);

  // Logo
  const logoSection = figma.createFrame();
  logoSection.name = "Logo";
  logoSection.resize(1344, 100);
  logoSection.layoutMode = "HORIZONTAL";
  logoSection.itemSpacing = 24;
  logoSection.fills = [];

  const logo = createLogo();
  logoSection.appendChild(logo);
  mainFrame.appendChild(logoSection);

  // Buttons
  const buttonsSection = figma.createFrame();
  buttonsSection.name = "Buttons";
  buttonsSection.resize(1344, 80);
  buttonsSection.layoutMode = "HORIZONTAL";
  buttonsSection.itemSpacing = 16;
  buttonsSection.fills = [];

  const buttonVariants = [
    { name: "Primary", color: tokens.color.institutional["arca-red"] },
    { name: "Secondary", color: tokens.color.institutional["arca-red"] },
    { name: "Success", color: tokens.color.culture.lime },
    { name: "Danger", color: tokens.color.culture["red-intense"] }
  ];

  buttonVariants.forEach(({ name, color }) => {
    const btn = createButton(name, color);
    buttonsSection.appendChild(btn);
  });

  mainFrame.appendChild(buttonsSection);

  // Badges
  const badgesSection = figma.createFrame();
  badgesSection.name = "Badges";
  badgesSection.resize(1344, 60);
  badgesSection.layoutMode = "HORIZONTAL";
  badgesSection.itemSpacing = 16;
  badgesSection.fills = [];

  const badgeVariants = [
    { name: "Primary", color: tokens.color.institutional["arca-red"] },
    { name: "Success", color: tokens.color.culture.lime },
    { name: "Warning", color: tokens.color.culture.orange },
    { name: "Danger", color: tokens.color.culture["red-intense"] },
    { name: "Info", color: tokens.color.culture.turquoise }
  ];

  badgeVariants.forEach(({ name, color }) => {
    const badge = createBadge(name, color);
    badgesSection.appendChild(badge);
  });

  mainFrame.appendChild(badgesSection);

  // Input
  const inputSection = figma.createFrame();
  inputSection.name = "Inputs";
  inputSection.resize(1344, 80);
  inputSection.layoutMode = "HORIZONTAL";
  inputSection.itemSpacing = 16;
  inputSection.fills = [];

  const input = createInput();
  inputSection.appendChild(input);
  mainFrame.appendChild(inputSection);

  // Card
  const cardSection = figma.createFrame();
  cardSection.name = "Cards";
  cardSection.resize(1344, 220);
  cardSection.layoutMode = "HORIZONTAL";
  cardSection.itemSpacing = 16;
  cardSection.fills = [];

  const card = createCard();
  cardSection.appendChild(card);
  mainFrame.appendChild(cardSection);

  figma.currentPage.appendChild(mainFrame);

  // Centrar vista
  figma.viewport.scrollAndZoomIntoView([mainFrame]);

  figma.notify("✅ Design System generado exitosamente!");
  figma.closePlugin();
}

// Ejecutar
generateDesignSystem();
