export default function Main() {
    return (
        <>
            <form className="ingredient-submit">
                <input 
                    aria-label="Add Ingredient"
                    type="text"
                    placeholder="e.g. oregano"
                >
                </input>
                <button>Add Ingrdient</button>
            </form>
        </>
    )
}