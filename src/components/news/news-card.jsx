// import img from "next/image";
// import Link from "next/link";
import { Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Eye,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

import { Card, CardContent } from "/src/components/ui/card";
import { Badge } from "/src/components/ui/badge";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { disLike, Like } from "/src/api/news/actions";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

export function NewsCard({
  title,
  img,
  category_id: category,
  createdAt,
  view,
  like,
  dislike,
  to = "#",
  id
}) {
  const categoryName = category?.name ?? "Kateqoriya yoxdur"

  const queryClient = useQueryClient()

  const likeMutation = useMutation({
    mutationKey: ['like', id],
    mutationFn: () => Like(id),
    onSuccess: () => {
      toast.success("like")
      queryClient.invalidateQueries({ queryKey: ['news'] })
    }
  })

  const disLikeMutation = useMutation({
    mutationKey: ['dislike', id],
    mutationFn: () => disLike(id),
    onSuccess: () => {
      toast.success("like")
      queryClient.invalidateQueries({ queryKey: ['news'] })
    }
  })



  return (

    <Card className="overflow-hidden rounded-xl py-0 transition-all hover:shadow-lg">
      <div className="relative aspect-[16/10]">
        <img
          src={img}
          alt={title}
          fill
          className="object-cover"
        />

        <Badge
          className="
              absolute
              bottom-4
              right-4
              bg-pink-600
              hover:bg-pink-600
            "
        >
          FOTO
        </Badge>
      </div>

      <CardContent className="space-y-6 p-5">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{createdAt}</span>
          </div>

          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{view}</span>
          </div>
        </div>
        <Link to={to}>
          <h3 className="line-clamp-3 min-h-[96px] text-2xl font-bold leading-relaxed">
            {title}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <span className="font-semibold uppercase tracking-wide text-cyan-600">
            {categoryName}
          </span>
          {likeMutation.isPending ? (
            <Spinner />
          ) : (
            <div
              onClick={() => likeMutation.mutate()}
              className="flex items-center gap-5 text-muted-foreground cursor-pointer"
            >
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-5 w-5" />
                <span>{like}</span>
              </div>
            </div>
          )}

          {disLikeMutation.isPending ? (
            <Spinner />
          ) : (
            <div
              onClick={() => disLikeMutation.mutate()}
              className="flex items-center gap-5 text-muted-foreground cursor-pointer"
            >
              <div className="flex items-center gap-1">
                <ThumbsDown className="h-5 w-5" />
                <span>{dislike}</span>
              </div>
            </div>
          )}



          <div className="flex items-center gap-1">
          </div>
        </div>
      </CardContent>
    </Card>

  );
}
