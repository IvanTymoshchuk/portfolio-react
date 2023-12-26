export const container = {
  maxWidth: '1120px',
  marginInline: '1.5rem',
  '@media screen and (max-width: 340px)': {
    marginInline: '1rem',
  },
  '@media screen and (min-width: 576px)': {
    gridTemplateColumns: '350px',
    justifyContent: 'center',
  },
  '@media screen and (min-width: 1150px)': {
    marginInline: 'auto',
  },
};

export const grid = {
  display: 'grid',
  gap: '1.5rem',
};

export const section = {
  paddingBlock: '4rem 2rem',
  '@media screen and (min-width: 1150px)': {
    paddingBlock: '7rem 2rem',
  },
};

export const sectionTitle = {
  position: 'relative',
  fontSize: '1.75rem',
  width: 'max-content',
  margin: '0.75rem auto 2rem',
  '@media screen and (min-width: 1150px)': {
    '&::after': {
      width: '70px',
      height: '48px',
    },
  },
};

export const geometricBox = {
  position: 'absolute',
  width: '20px',
  height: '20px',
  backgroundColor: 'hsl(14, 98%, 50%)',
  rotate: '-30deg',
};

export const buttonAndGhost = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '0.5rem',
};

export const button = {
  backgroundColor: 'hsl(0, 0%, 18%)',
  padding: '1.1rem 1.5rem',
  color: 'hsl(0, 0%, 95%)',
  fontWeight: '500',
  transition: 'background-color 0.4s',
};

export const buttonGhost = {
  border: '3px solid hsl(0, 0%, 18%)',
  color: 'hsl(0, 0%, 18%)',
  padding: ' 0.5rem',
  transition: ' border 0.4s, color 0.4s',
};
