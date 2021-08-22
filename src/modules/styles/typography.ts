import Color from './color';

const common = `
  font-family: "PT serif";
`;

const Typography = {
  primary: {
    m: {
      regular: `
        ${common}
        fontSize: 16px;
        color: ${Color.TextPrimary};
      `,
    },
    l: {
      regular: `
        ${common}
        fontSize: 20px;
        color: ${Color.TextPrimary};
      `,
      bold: `
        ${common}
        fontSize: 20px;
        fontWeight: bold;
        color: ${Color.TextPrimary};
      `,
    },
  },
  secondary: {
    s: {
      regular: `
        ${common}
        fontSize: 12px;
      `,
    },
  },
};

export default Typography;
