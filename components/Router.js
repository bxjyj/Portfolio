const Router = () => {
    const [currentPage, setCurrentPage] = React.useState('home');
    const [pageData, setPageData] = React.useState(null);

    // Handle URL changes and routing
    React.useEffect(() => {
        const handleRouteChange = () => {
            const path = window.location.pathname;
            const hash = window.location.hash;
            
            // Handle hash-based routing
            if (hash) {
                const route = hash.substring(1); // Remove the #
                handleRoute(route);
            } else if (path !== '/') {
                handleRoute(path.substring(1));
            } else {
                setCurrentPage('home');
                setPageData(null);
            }
        };

        // Listen for URL changes
        window.addEventListener('popstate', handleRouteChange);
        window.addEventListener('hashchange', handleRouteChange);
        
        // Initial route check
        handleRouteChange();

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
            window.removeEventListener('hashchange', handleRouteChange);
        };
    }, []);

    const handleRoute = (route) => {
        const [type, id] = route.split('/');
        
        switch (type) {
            case 'project':
                const project = window.projectsData?.find(p => p.id === parseInt(id));
                if (project) {
                    setCurrentPage('project-detail');
                    setPageData(project);
                }
                break;
            case 'hobby':
                const hobby = getHobbyById(id);
                if (hobby) {
                    setCurrentPage('hobby-detail');
                    setPageData(hobby);
                }
                break;
            case 'blog':
                const blog = window.blogData?.find(b => b.id === parseInt(id));
                if (blog) {
                    setCurrentPage('blog-detail');
                    setPageData(blog);
                }
                break;
            default:
                setCurrentPage('home');
                setPageData(null);
        }
    };

    const getHobbyById = (id) => {
        const hobbies = [
            {  id: 'hiking',
                title: "Hiking",
                description: "Exploring nature trails and enjoying the beauty of nature.",
                image: "images/boardwalk.jpg",
                photos: [
                    "images/boardwalk.jpg"
                ],
                summary: "Hiking is my way of grounding myself and staying present in the moment. I love being able to walk amongst the trees and just enjoy the outdoors."
        
            },
            {
                id: 'bird-watching',
                title: "Bird Watching",
                description: "Observing and identifying birds in their natural habitats. A peaceful hobby that connects me with nature and wildlife.",
                image: "images/snowy.jpg",
                photos: [
                    "images/heron.jpg", "images/blueheron.jpg", "images/redtail.jpg", "images/snailkite.jpg", "images/unknownbird.jpg"
                ],
                summary: "Bird watching has taught me to slow down and listen to the world revolve without you. I love listening and watching them fly by."},
            {
                id: 'sculpting',
                title: "Sculpting",
                description: "Creating three-dimensional art from my finger tips.",
                image: "images/IMG_5959.jpg",
                photos: [
                    "images/IMG_5959.jpg", "images/IMG_1798.jpg"
                ],
                summary: "Sculpting allows me to express creativity through my hands. Whether its function pieces or for display, sculpting is my favorite way to create."
            }
        ];
        return hobbies.find(h => h.id === id);
    };

    const navigateTo = (route) => {
        window.location.hash = route;
    };

    const goBack = () => {
        window.history.back();
    };

    // Render different pages based on current route
    if (currentPage === 'home') {
        return (
            <div className="min-h-screen bg-gray-900">
                <Navigation navigateTo={navigateTo} />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects navigateTo={navigateTo} />
                    <Hobbies navigateTo={navigateTo} />
                    <Blog navigateTo={navigateTo} />
                    <Contact />
                </main>
                <Footer />
            </div>
        );
    }

    if (currentPage === 'project-detail') {
        return <ProjectDetail project={pageData} goBack={goBack} />;
    }

    if (currentPage === 'hobby-detail') {
        return <HobbyDetail hobby={pageData} goBack={goBack} />;
    }

    if (currentPage === 'blog-detail') {
        return <BlogDetail blog={pageData} goBack={goBack} />;
    }

    return <div>Page not found</div>;
};

// Export for use in App.js
window.Router = Router;
