import { getNews } from '/src/api/news/news'
import { useQuery } from '@tanstack/react-query'
import { NewsCardSkeleton } from '../news/news-card-skleton'
import { NewsCard } from '../news/news-card'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
const Main = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['news'],
        queryFn: getNews
    })
    return (
        <div>
            <div className="container mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <NewsCardSkeleton key={i} />
                    ))
                    : data?.data?.map((item) => (
                        <NewsCard
                            key={item._id}
                            title={item.title}
                            img={item.img}
                            category_id={item.category_id}
                            createdAt={item.createdAt}
                            view={item.view}
                            like={item.like}
                            dislike={item.dislike}
                            to={`/news/${item._id}`}
                            id={item._id}
                        />
                    ))}
            </div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default Main
