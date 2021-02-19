// will get: chapter name, link, summary, quotes (array)

const Chapter = () => {
    return (
        <div className="chapter">
            <div class="ch-left">
                <span class="chaptername">
                    <a href="https://docs.google.com/document/d/1nM__Owx6xOwMaEingWea0KfxeyZDsEQb4bGe7aaZy9A" target="_blank" rel="noopener noreferrer">CH 2: This Venerable One Lives</a>
                </span>
            </div>
            <div class="ch-right">
                <span>shi mei's first appearance.</span>
                <details class="quotes">
                    <summary>quotes</summary>
                    <ul>
                        <li>"lorem ipsum ipsi dipsy doret"</li>
                        <li>"yadda yadda blah blah blah meatbun knife"</li>
                    </ul>
                </details>
            </div>
        </div>
    )
}

export default Chapter;