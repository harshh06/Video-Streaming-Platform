import React, { useEffect, useState } from "react";
import icon from "../assets/icon.png";
import ytIcon from "../assets/yt.jpeg";
import user from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar, toggleSideBar } from "../utils/sideBarSlice";
import { isMobile } from "react-device-detect";
import { updateCache } from "../utils/searchResultSlice";
import { Link } from "react-router-dom";
function Header() {
    // dispatch...
    const dispatch = useDispatch();
    const searchCache = useSelector((store) => store.searchCache);
    // states..
    const [searchText, setSearchText] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // functions..
    const toggle = () => {
        dispatch(toggleSideBar());
    };

    const closeSideBarWhenMobile = () => {
        dispatch(closeSideBar());
    };

    const getSearchResults = React.useCallback(async () => {
        const data = await fetch(
            `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchText}`
        );
        const json = await data.json();
        setSearchSuggestions(json[1]);
        dispatch(updateCache({ [searchText]: json[1] }));
    }, [searchText, dispatch]);

    //useEffetcts...
    // to hide sidebar when on mobile devices
    useEffect(() => {
        if (isMobile) closeSideBarWhenMobile();
    });
    // for calling apis to search and debouncing
    useEffect(() => {
        // if already present in cache, dont call the search api..
        const timer = setTimeout(() => {
            if (searchCache[searchText]) {
                setSearchSuggestions(searchCache[searchText]);
            } else {
                getSearchResults();
            }
        }, 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchText, searchCache, getSearchResults]);

    // jsx..
    return (
        <div className=" shadow-lg grid grid-flow-col w-full bg-white    sticky top-0">
            <div className="flex  col-span-3 p-2 m-2 bg-white">
                <button onClick={toggle}>
                    <img alt="sidebar-icon" className="h-10" src={icon} />
                </button>
                <Link to="/">
                    <img alt="yt-icon" className="h-10 " src={ytIcon} />
                </Link>
            </div>
            <div className="col-span-5 py-4  m-2">
                <div>
                    <input
                        className="border w-1/2 h-8 rounded-l-xl p-2  border-gray-300"
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className="border h-8 rounded-r-xl px-4 bg-gray-100">
                        {" "}
                        🔎{" "}
                    </button>
                </div>
                <div className="bg-white w-[29rem]  fixed shadow-lg">
                    <ul className="">
                        {showSuggestions &&
                            searchSuggestions.map((suggestion, id) => {
                                return (
                                    <Link
                                        to={`/search?v=${suggestion}`}
                                        key={id}
                                        onMouseDown={(event) =>
                                            event.preventDefault()
                                        }>
                                        <li className="hover:bg-gray-100 py-1 rounded-lg px-2">
                                            🔎 {suggestion}
                                        </li>
                                    </Link>
                                );
                            })}
                    </ul>
                </div>
            </div>
            <div className="p-2 m-2">
                <img alt="user-icon" className="h-8" src={user} />
            </div>
        </div>
    );
}

export default Header;
