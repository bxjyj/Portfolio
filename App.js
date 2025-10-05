const App = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 30);

        return () => clearTimeout(timer);
    }, []);

    // Loading Screen
    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-700 border-t-green-500 rounded-full animate-spin mx-auto mb-4"></div>
                    {/* <h2 className="text-2xl font-bold text-gray-100 mb-2">Jade Xu</h2> */}
                    {/* <p className="text-gray-400">Data Analyst</p> */}
                </div>
            </div>
        );
    }

    return <Router />;
};

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
