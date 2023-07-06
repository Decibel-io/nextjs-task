import { SEA_GREEN } from '@/styles/colors';
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
    width: '30%',
    backgroundColor: 'white',
    boxShadow: 24,
    p: 0,
    overflow: 'auto',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': { backgroundColor: 'black' },
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 2,
  },
  rowContainer: {
    display: 'flex',
    gap: 3,
    alignItems: 'center',
    px: 2,
    marginY: 1,
  },
  rowKey: {
    fontSize: '16px',
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

export const getCallTypeStyles = (callType: string): Style => {
  return {
    color:
      callType === 'missed'
        ? 'red'
        : callType === 'voicemail'
        ? 'blue'
        : SEA_GREEN,
  };
};
