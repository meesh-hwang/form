import useFormContext from "../hooks/useFormContext";

const Shipping = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <>
            <label htmlFor="sameAsBilling">
                <input
                    type="checkbox"
                    id="sameAsBilling"
                    name="sameAsBilling"
                    checked={data.sameAsBilling}
                    onChange={handleChange}
                />
                Same as Billing Adress
            </label>

            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="shipFirstName">First Name</label>
                    <input
                        type="text"
                        id="shipFirstName"
                        name="shipFirstName"
                        placeholder="Jane"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.shipFirstName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="shipLastName">Last Name</label>
                    <input
                        type="text"
                        id="shipLastName"
                        name="shipLastName"
                        placeholder="Doe"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.shipLastName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
            </div>

            <label htmlFor="shipAddress1">Address</label>
            <input
                type="text"
                id="shipAddress1"
                name="shipAddress1"
                placeholder="555 Wallaby Way"
                pattern="[\w\d\s.#]{2,}"
                value={data.shipAddress1}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="shipAddress2" className="offscreen">2nd Address line</label>
            <input
                type="text"
                id="shipAddress2"
                name="shipAddress2"
                placeholder="Apt. 2"
                pattern="[\w\d\s.#]{2,}"
                value={data.shipAddress2}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="shipCity">City</label>
            <input
                type="text"
                id="shipCity"
                name="shipCity"
                placeholder="Vancouver"
                pattern="([A-Z])[\w\s.]{1,}"
                value={data.shipCity}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="shipProvince">Province</label>
            <select
                id="shipProvince"
                name="shipProvince"
                value={data.shipProvince}
                onChange={handleChange}
                disabled={data.sameAsBilling}
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

            <label htmlFor="shipPostalCode">Postal Code</label>
            <input
                type="text"
                id="shipPostalCode"
                name="shipPostalCode"
                placeholder="A1B2C3"
                pattern="/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;"
                maxLength="6"
                value={data.shipPostalCode}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />
            
        </>
    )

    return content
}

export default Shipping