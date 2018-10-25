import React from 'react';
import PropTypes from 'prop-types';
import './SlideToggle.css';

class SlideToggle extends React.Component {
  static props = {
    toggled: PropTypes.bool,
    onToggle: PropTypes.func,
    label: PropTypes.string,
    color: PropTypes.oneOf([
      'green',
      'blue',
      'yellow',
      'gold',
      'orange',
      'pink',
      'violet',
      'red'
    ])
  };

  static defaultProps = {
    toggled: false,
    onToggle: () => {},
    color: 'green',
    label: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      toggled: props.toggled
    };
  }

  handleToggle = event => {
    const toggled = event.target.checked;
    this.setState({ toggled });
    this.props.onToggle(toggled);
  };

  render() {
    const { toggled } = this.state;
    const { color, children, label, disabled } = this.props;

    const toggleClassName = [
      'SlideToggle',
      disabled ? 'SlideToggle--disabled' : ''
    ];
    const barClassName = [
      'SlideToggle__bar',
      toggled ? `SlideToggle__bar--${color}` : ''
    ];
    const handleClassName = [
      'SlideToggle__handle',
      toggled ? 'SlideToggle__handle--toggled' : ''
    ];

    return (
      <div className={toggleClassName.join(' ')}>
        <label>
          <div className={barClassName.join(' ')}>
            <input
              type="checkbox"
              checked={toggled}
              onChange={disabled ? null : this.handleToggle}
              aria-checked={toggled}
              disabled={disabled}
            />
            <span className={handleClassName.join(' ')} />
          </div>
          <span className="SlideToggle__label">{children || label}</span>
        </label>
      </div>
    );
  }
}

export default SlideToggle;
