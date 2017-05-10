export {
    handleInputChange,
}

function handleInputChange(field) {
    return event => {
      const { value } = event.target;

      this.setState({ [field]: value });
    };
  }