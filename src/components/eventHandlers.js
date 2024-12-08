// eventHandlers.js

export const handlePlatformSwitch = (platform, setState) => {
    setState((prevState) => ({
      selectedPlatform: platform,
    }));
  };
  
 
export const  handleStartClick = () => {
    this.setState({
      buttons: {
        ...this.state.buttons,
        start: { isActive: false, isVisible: true },
      },
      components: {
        showForm: true,
        showMessage: false,
        showTable: false,
      },
      message: "",
    });
  };

export const  handleFormSubmit = (e) => {
    const { formData, showInvestment, showPlatform } = this.state;
    e.preventDefault();
    this.setState({
      buttons: {
        start: { isActive: false, isVisible: false },
        enable: { isActive: false, isVisible: false },
        edit: { isActive: true, isVisible: true },
        disable: { isActive: true, isVisible: true },
      },
      components: {
        showForm: false,
        showMessage: false,
        showTable: true,
      },
      message: "",
      investment: formData.investment, // Commit the value
      platform: formData.platform, // Commit the value
      showInvestment: true,
      showPlatform: true,
    });
  };

export const  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

export const  handleEditClick = () => {
    this.setState({
      buttons: {
        ...this.state.buttons,
        edit: { isActive: false, isVisible: true },
        disable: { isActive: false, isVisible: true },
      },
      components: {
        showForm: true,
        showMessage: false,
        showTable: false,
      },
    });
  };

export const  handleEditFormSubmit = (e) => {
    const { formData, showInvestment, showPlatform } = this.state;
    e.preventDefault();
    this.setState({
      buttons: {
        ...this.state.buttons,
        edit: { isActive: true, isVisible: true },
        disable: { isActive: true, isVisible: true },
      },
      components: {
        showForm: false,
        showMessage: false,
        showTable: true,
      },

      message: "",
      investment: formData.investment, // Commit the value
      platform: formData.platform, // Commit the value
    });
  };

export const  handleDisableClick = () => {
    this.setState({
      buttons: {
        ...this.state.buttons,
        enable: { isActive: true, isVisible: true },
        disable: { isActive: false, isVisible: false },
      },
      components: {
        showForm: false,
        showMessage: true,
        showTable: false,
      },
      message: "Bot ended, resume the bot by enabling.",
    });
  };

 export const handleEnableClick = () => {
    this.setState({
      buttons: {
        ...this.state.buttons,
        enable: { isActive: false, isVisible: false },
        edit: { isActive: true, isVisible: true },
        disable: { isActive: true, isVisible: true },
      },
      components: {
        showForm: false,
        showMessage: true,
        showTable: false, // Prevent table rendering during timeout
      },
      message: "Bot resumed, you're all set, please wait!",
      isMessageTimeoutActive: false, // Activate timeout flag
    });

    setTimeout(() => {
      this.setState({
        components: {
          ...this.state.components,
          showMessage: false,
          showTable: true, // Show table after timeout
        },
        isMessageTimeoutActive: false, // Reset timeout flag
      });
    }, 1000);
  };