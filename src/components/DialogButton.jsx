import useToggle from '../hooks/useToggle';
import Icons from '../resources/Icons';

function WarningDialog({text}) {

    const [handleToggle, isOpen] = useToggle();

    return (
        <div>
            <div className={`dialog ${isOpen ? 'open' : ''}`}>
                <div className="dialog-glassPane" onClick={handleToggle} />
                <div className='dialog-context'>
                    <div className='dialog-header'>
                        <button className='primary circle' onClick={handleToggle}>
                            <Icons.CloseIcon />
                        </button>
                    </div>
                    <div className="dialog-body">
                        <Icons.WarningIcon />
                        <div className='dialog-message'>
                            <h4>¡Cuidado!</h4>
                            <p>No podrás volver atrás</p>
                        </div>
                    </div>
                    <div className="dialog-footer">
                        <button className='primary' onClick={handleToggle}>Borrar</button>
                        <button className='secondary' onClick={handleToggle}>Cancelar</button>
                    </div>
                </div>
            </div>
            <button className='primary' onClick={handleToggle}>{text}</button>
        </div>
    )
}

function ErrorDialog({ text }) {

    const [handleToggle, isOpen] = useToggle();

    return (
        <div>
            <div className={`dialog ${isOpen ? 'open' : ''}`}>
                <div className="dialog-glassPane" onClick={handleToggle} />
                <div className='dialog-context'>
                    <div className='dialog-header'>
                        <button className='primary circle' onClick={handleToggle}>
                            <Icons.CloseIcon />
                        </button>
                    </div>
                    <div className="dialog-body">
                        <Icons.ErrorIcon />
                        <div className='dialog-message'>
                            <h4>Upps</h4>
                            <p>Algo ha pasado</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='primary' onClick={handleToggle}>{text}</button>
        </div>
    )
}

function SuccessDialog({ text }) {

    const [handleToggle, isOpen] = useToggle();

    return (
        <div>
            <div className={`dialog ${isOpen ? 'open' : ''}`}>
                <div className="dialog-glassPane" onClick={handleToggle} />
                <div className='dialog-context'>
                    <div className='dialog-header'>
                        <button className='primary circle' onClick={handleToggle}>
                            <Icons.CloseIcon />
                        </button>
                    </div>
                    <div className="dialog-body">
                        <Icons.SuccessIcon />
                        <div className='dialog-message'>
                            <h4>¡Vamos!</h4>
                            <p>Todo ha salido bien : )</p>
                        </div>
                    </div>
                    <div className="dialog-footer">
                        <button className='primary' onClick={handleToggle}>Cerrar pestaña</button>
                    </div>
                </div>
            </div>
            <button className='primary' onClick={handleToggle}>{text}</button>
        </div>
    )
}

export {
    WarningDialog,
    ErrorDialog,
    SuccessDialog
};