
import { Link } from "react-router-dom";

const footerLinks = [
    {
        title: "Home",
        links: [
            { label: "Categories", path: "/categories" },
            { label: "Devices", path: "/devices" },
            { label: "Pricing", path: "/pricing" },
            { label: "FAQ", path: "/faq" },
        ],
    },
    {
        title: "Movies",
        links: [
            { label: "Genres", path: "/movies" },
            { label: "Trending", path: "/movies/trending" },
            { label: "New Release", path: "/movies/new-releases" },
            { label: "Popular", path: "/movies/popular" },
        ],
    },
    {
        title: "Shows",
        links: [
            { label: "Genres", path: "/shows" },
            { label: "Trending", path: "/shows/trending" },
            { label: "New Release", path: "/shows/new-releases" },
            { label: "Popular", path: "/shows/popular" },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "Contact Us", path: "/contact" },
        ],
    },
    {
        title: "Subscription",
        links: [
            { label: "Plans", path: "/subscription" },
            { label: "Features", path: "/subscription" },
        ],
    },
];

function Footer() {
    return (
        <footer className="bg-[#0f0f0f] px-5 pt-14 text-white sm:px-8 lg:px-16">
            <div className="mx-auto max-w-[1597px]">

                {/* Main Footer */}
                <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-medium">
                                {section.title}
                            </h3>

                            <ul className="mt-5 space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.path}
                                            className="text-sm text-[#999] transition hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Social Media */}
                    <div>
                        <h3 className="text-sm font-medium">
                            Connect With Us
                        </h3>

                        <div className="mt-5 flex gap-2">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#292929] bg-[#1a1a1a] text-sm font-bold transition hover:bg-[#252525]"
                            >
                                f
                            </a>

                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X"
                                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#292929] bg-[#1a1a1a] text-sm font-bold transition hover:bg-[#252525]"
                            >
                                𝕏
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#292929] bg-[#1a1a1a] text-sm font-bold transition hover:bg-[#252525]"
                            >
                                in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-16 border-t border-[#262626]"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col gap-5 py-6 text-xs text-[#999] md:flex-row md:items-center md:justify-between">
                    <p>
                        ©2026 StreamVibe, All Rights Reserved
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/terms"
                            className="transition hover:text-white"
                        >
                            Terms of Use
                        </Link>

                        <span className="text-[#333]">|</span>

                        <Link
                            to="/privacy"
                            className="transition hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <span className="text-[#333]">|</span>

                        <Link
                            to="/cookies"
                            className="transition hover:text-white"
                        >
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
