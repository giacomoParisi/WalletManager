import './switch.css'

type SwitchProps = {
    isOn: boolean
    icon: string
    handleToggle: () => void
}

function Switch({ isOn, icon, handleToggle }: SwitchProps) {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id="react-switch-new"
                type="checkbox"
            />
            <label className="react-switch-label" htmlFor="react-switch-new">
                <div className="react-switch-button">
                    <img className="switch-icon" src={icon} alt="" />
                </div>
            </label>
        </>
    )
}

export default Switch
