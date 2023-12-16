import SignOutButton from "../../../components/App/Login/SignOutButton";
import appData from "../../data/app.json";
import Image from "next/image";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex">
            <aside class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-ligth-color border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <a href="/">
                    <Image src={appData.lightLogo} width={350} height={70} />
                </a>

                <div class="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <a
                            class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                            href="#"
                        >
                            <svg
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <span class="mx-4  font-semibold">
                                Cotizaciones
                            </span>
                        </a>

                        <hr class="my-6 border-gray-500 dark:border-gray-600" />
                    </nav>
                    <SignOutButton />
                </div>
            </aside>
            <div className="pl-5 pt-5 w-full">{children}</div>
        </div>
    );
}
