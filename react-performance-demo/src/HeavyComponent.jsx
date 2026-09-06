function HeavyComponent() {
    return (
        <div className="heavy">
            <h2>Heavy Component Loaded</h2>

            <p>
                This component is loaded only when the user
                requests it. React.lazy() and Suspense are
                used for code splitting.
            </p>
        </div>
    );
}

export default HeavyComponent;