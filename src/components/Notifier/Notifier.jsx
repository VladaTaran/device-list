import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { RemoveSnackbar } from 'ducks/actions/notifier';


class Notifier extends Component {
   displayed = [];
    storeDisplayed = (id) => {
    this.displayed = [...this.displayed, id];
  };

  shouldComponentUpdate(nextProps) {
    const newSnacks = nextProps.notifications.notifications;
    if (!newSnacks.length) {
      this.displayed = [];
      return false;
    }

    const { notifications: currentSnacks } = this.props.notifications;
    let notExists = false;
    for (let i = 0; i < newSnacks.length; i += 1) {
      const newSnack = newSnacks[i];
      if (newSnack.dismissed) {
        this.props.closeSnackbar(newSnack.key);
        this.props.RemoveSnackbar(newSnack.key);
      }

      if (notExists) {
        continue;
      }
      notExists = notExists || !currentSnacks.filter(({ key }) => newSnack.key === key).length;
    }
    return notExists;
  }

  componentDidUpdate() {
    const { notifications = [] } = this.props.notifications;

    notifications.forEach(({ key, message, options = {} }) => {
      // Do nothing if snackbar is already displayed
      if (this.displayed.includes(key)) {
        return;
      }
      // Display snackbar using notistack
      this.props.enqueueSnackbar(message, {
        ...options,
        onClose: (event, reason, key) => {
          if (options.onClose) {
            options.onClose(event, reason, key);
          }

          // Dispatch action to remove snackbar from redux store
          this.props.RemoveSnackbar(key);
        }
      });
      // Keep track of snackbars that we've displayed
      this.storeDisplayed(key);
    });
  }

  render() {
    return null;
  }
}

const mapStateToProps = store => ({
  notifications: store.notifications,
});

const mapDispatchToProps = dispatch => bindActionCreators({ RemoveSnackbar }, dispatch);

export default withSnackbar(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifier));
