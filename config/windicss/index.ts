export const sign = {
  '.sign-panel': {
    width: '354px',
    background: 'var(--second-bg)',
    color: 'var(--white)',
    padding: '0 42px 34px',
    display: 'flex',
    'flex-direction': 'column',
  },
  // sign in
  '.sign-in': {
    height: '450px',
  },
  // sign up
  '.sign-up': {
    height: '535px',
  },
  // reset password
  '.sign-reset-password': {
    height: '535px',
  },
  '.sign-title': {
    'font-size': '24px',
    display: 'flex',
    'align-items': 'center',
    'margin-bottom': '32px',
  },
  '.sign-input': {
    '.ant-input-wrapper': {
      'background-color': '#191b21',
      'border-radius': '12px',
      '&:hover': {
        color: 'red',
        '.ant-input': {
          'border-color': '#3f8cff',
        },
      },
      '.ant-input-group-addon': {
        '&:last-child': {
          position: 'absolute',
          'z-index': '0',
          padding: '0',
          left: '20px',
          height: '16px',
          top: '16px',
          transform: 'translateY(0)',
          'font-size': '12px',
          color: '#808191',
          'line-height': '16px',
          'letter-spacing': '1px',
          background: 'transparent',
          border: 'none',
          transition: '0.2s',
          'pointer-events': 'none',
        },
        '&:first-child': {
          position: 'absolute',
          'z-index': '2',
          padding: '0',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          transition: '0.2s',
          width: '24px',
          height: '24px',
          cursor: 'pointer',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      },
      '.ant-input': {
        height: '68px',
        border: '2px solid transparent',
        'border-radius': '12px',
        background: 'transparent',
        outline: 'none',
        'box-shadow': 'none',
        'caret-color': '#355dff',
        color: 'var(--white)',
        'font-size': '12px',
        'line-height': '12px',
        padding: '30px 18px 12px',
        '&:hover, &:focus, &.ant-input-focused': {
          'border-color': '#3f8cff',
        },
        '&:placeholder-shown + .ant-input-group-addon': {
          top: '50%',
          transform: 'translateY(-50%)',
        },
        '&:focus, &.ant-input-focused': {
          '& + .ant-input-group-addon': {
            top: '16px',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  '.sign-submit-button': {
    width: '100%',
    height: '47px',
    // background: 'var(--primary-color)',
    'border-radius': '14px',
    border: 'none',
    'box-shadow': 'none',
    color: '#ffffff',
    'font-size': '12px',
    '&[disabled]': {
      'pointer-events': 'none',
      opacity: '0.3',
    },
  },
}

export const btn = {
  '.btn': {
    width: '100%',
    height: '100%',
    background: 'var(--primary-color)',
    'border-radius': '14px',
    border: 'none',
    'box-shadow': 'none',
    color: '#ffffff',
    'font-size': '12px',
    '&[disabled]': {
      'pointer-events': 'none',
      opacity: '0.3',
    },
    '&-loading': {
      opacity: '0.5',
      'pointer-events': 'none',
    },
    '&-cancel': {
      background: '#32343A',
    },
  },
}
