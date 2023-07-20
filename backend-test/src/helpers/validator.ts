class Validator {
  static validateInput(name: string, value: string) {
    if (!value) throw { message: `${name} is required`, name: "BAD_REQUEST" };
  }

  static validateData(data: any) {
    if (!data) throw { name: "NOT_FOUND", message: "data not found" };
  }

  static validateToken(value: any) {
    if (!value) throw { name: "INVALID_TOKEN", message: "access denied" };
  }
}

export default Validator;
