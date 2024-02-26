export default class CommonUtlis {
    static CapitalizeFirstLetter = (str:any)=> {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }