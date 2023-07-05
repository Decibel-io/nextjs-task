import { IStyles, Style } from '@/types/global';

export const styles = {
  loading: {
    color: 'white',
    fontSize: '12px',
  },
  modalBody: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    backgroundColor: 'white',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': { backgroundColor: 'black' },
  },
} satisfies IStyles;

export const getArchiveStyles = (isArchive: boolean): Style => {
  return {
    borderColor: isArchive ? 'green' : 'gray',
    paddingX: '5px',
    backgroundColor: isArchive ? 'green' : 'gray',
    color: 'white',
    '&:hover': {
      backgroundColor: isArchive ? 'green' : 'gray',
    },
  };
};
