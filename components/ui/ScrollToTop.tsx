const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      showScroll && (
        <button
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus:outline-none"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )
    );
  };

function useState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}


function useEffect(arg0: () => () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}