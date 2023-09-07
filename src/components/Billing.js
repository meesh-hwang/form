import useFormContext from "../hooks/useFormContext"
const Billing = () => {

    const { data, handleChange } = useFormContext()
    
    const content = (
        <div className="flex-col">
            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="billFirstName">First Name</label>
                    <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Jane"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.billFirstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billLastName">Last Name</label>
                    <input
                        type="text"
                        id="billLastName"
                        name="billLastName"
                        placeholder="Doe"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.billLastName}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <label htmlFor="billAddress1">Address</label>
            <input
                type="text"
                id="billAddress1"
                name="billAddress1"
                placeholder="555 Wallaby Way"
                pattern="[\w\d\s.#]{2,}"
                value={data.billAddress1}
                onChange={handleChange}
            />

            <label htmlFor="billAddress2" className="offscreen">2nd Address line</label>
            <input
                type="text"
                id="billAddress2"
                name="billAddress2"
                placeholder="Apt. 2"
                pattern="[\w\d\s.#]{2,}"
                value={data.billAddress2}
                onChange={handleChange}
            />

            <label htmlFor="billCity">City</label>
            <input
                type="text"
                id="billCity"
                name="billCity"
                placeholder="Vancouver"
                pattern="([A-Z])[\w\s.]{1,}"
                value={data.billCity}
                onChange={handleChange}
            />

            <label htmlFor="billProvince">Province</label>
            <select
                id="billProvince"
                name="billProvince"
                value={data.billProvince}
                onChange={handleChange}
            >
                <option value="NL">Newfoundland and Labrador</option>
                <option value="PE">Prince Edward Island</option>
                <option value="NS">Nova Scotia</option>
                <option value="NB">New Brunswick</option>
                <option value="QC">Quebec</option>
                <option value="ON">Ontario</option>
                <option value="MB">Manitoba</option>
                <option value="SK">Saskatchewan</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="YT">Yukon</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
            </select>

            <label htmlFor="billPostalCode">Postal Code</label>
            <input
                type="text"
                id="billPostalCode"
                name="billPostalCode"
                placeholder="A1B2C3"
                pattern="/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;"
                maxLength="6"
                value={data.billPostalCode}
                onChange={handleChange}
            />
        </div>
    )

    return content
}
export default Billing