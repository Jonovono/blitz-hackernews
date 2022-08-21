/* This example requires Tailwind CSS v2.0+ */
import {
  ChatAltIcon,
  ChevronUpIcon,
  ClockIcon,
  EyeOffIcon,
  UserIcon,
} from "@heroicons/react/outline"
import { Entry, User } from "@prisma/client"
import { formatDistance } from "date-fns"
import { useI18n } from "locales"
import Link from "next/link"

const RecordList = ({
  data,
}: {
  data: (Entry & {
    author: User
  })[]
}) => {
  const { t } = useI18n()

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {data &&
          data.map((entry) => (
            <li key={entry.id}>
              <div className="flex items-center hover:bg-gray-50 p-4">
                <div className="mr-4 text-center text-gray-800">
                  <button className="" id="thumbs_up" onClick={() => {}}>
                    <ChevronUpIcon className="h-4 w-4" />
                  </button>
                  <div className="">120</div>
                </div>

                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <a
                        href="#"
                        className="font-medium text-orange-600 hover:text-orange-800 truncate"
                      >
                        {entry.title}
                      </a>
                      <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                        ({" "}
                        <a href="#" className="hover:underline">
                          sitename
                        </a>{" "}
                        )
                      </p>
                    </div>
                    <div className="mt-1 flex justify-between">
                      <div className="flex w-full">
                        <div className="flex items-center text-sm text-gray-500">
                          <UserIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <Link href="/user/">
                            {/* @ts-ignore */}
                            <a className="hover:underline">{entry.author.name}</a>
                          </Link>
                        </div>
                        <div className="ml-2 flex items-center text-sm text-gray-500 ">
                          <ClockIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <Link href="/entry/">
                            <a className="hover:underline">
                              {formatDistance(new Date(entry.createdAt), new Date(), {
                                addSuffix: true,
                              })}
                            </a>
                          </Link>
                        </div>

                        <div className="ml-2 flex items-center text-sm text-gray-500 ">
                          <ChatAltIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <Link href="/comments/">
                            <a className="hover:underline">{t("recordlist.comments")}</a>
                          </Link>
                        </div>
                        <div className="ml-2 flex items-center text-sm text-gray-500 ">
                          <EyeOffIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <a
                            className="hover:underline"
                            onClick={() => {
                              console.log("hide record")
                            }}
                          >
                            {t("recordlist.hide")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default RecordList
