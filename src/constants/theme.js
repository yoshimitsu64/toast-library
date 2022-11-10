import {Check2Circle, Bug, ExclamationCircle, InfoCircle, XLg} from 'react-bootstrap-icons'

export const theme = {
  space : {
    marginRight:[10,15,20,25,30,35,40],
    marginTop:[15],
    marginLeft: []
  },
  fontSizes : {
    fontSize : [8, 14,20,26,32]
  },
  notifications: {
    success: {
      backgroundColor: "#06d6a0",
      color: "#FFFFFF",
      icon: <Check2Circle size={30}/>,
    },
    error: {
      backgroundColor: "#e63946",
      color: "#FFFFFF",
      icon: <Bug size={30}/>

    },
    warning: {
      backgroundColor: "#ffbd00",
      color: "#000000",
      icon: <ExclamationCircle size={30}/>
    },
    info: {
      backgroundColor: "#7209b7",
      color: "#FFFFFF",
      icon:<InfoCircle size={30}/>
    },
    closeIcon: <XLg size={20}/>
  }
};
