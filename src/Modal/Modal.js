import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          открыть окно
        </button>

        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Поздравляю!</h1>
              <p>Вы создали веб-приложение на реакте</p>
              <button onClick={() => this.setState({ isOpen: false })}>
                Закрыть окно
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
