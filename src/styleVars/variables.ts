// Colors
export const white = '#fff';
export const black = '#000';
export const grey = '#878787';
export const blue = '#0372fa';

// Font sizes 
export const fontSize = {sm: '10px', md: '14px', lg: '24px'};

// Spacing
export const spacing = {sm: '8px', md: '16px', lg: '24px', xl: '48px'};

// Media queries
export const mobile = '321px';
export const desktop = '768px';
export const desktop_xl = '1024px';

export const boxShadowBlue = `
  -webkit-box-shadow: 0px 0px 0px 5px ${blue};
  -moz-box-shadow: 0px 0px 0px 5px ${blue};
  box-shadow: 0px 0px 0px 5px ${blue};
  border-radius: 5px;
` 

export const boxShadowBlack = `
  -webkit-box-shadow: 0px 0px 0px 5px ${black};
  -moz-box-shadow: 0px 0px 0px 5px ${black};
  box-shadow: 0px 0px 0px 5px ${black};
` 

export const arrow = `
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: ${spacing.xl};
  height: ${spacing.xl};
  border-radius: ${spacing.lg};
  font-size: ${fontSize.lg};
  background-color: ${white};
  border: 1px solid ${grey};
  color: ${black};
  cursor: pointer;
`

export const centeredContent = `
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
`

// Mixins
export const width = () => `
  width: 100%;
`;

export const column = () => `
  display: flex;
  flex-direction: column;
`;

export const row = () => `
  display: flex;
  flex-direction: row;
`