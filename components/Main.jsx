import Link from 'next/link'
import { useRouter } from 'next/router'

const PAGE_SIZE = 5

export default ({ blogs }) => {
  const router = useRouter()
  const totalPages = Math.max(1, Math.ceil(blogs.length / PAGE_SIZE))
  const requested = parseInt(router.query.page, 10)
  const page = Math.min(Math.max(Number.isNaN(requested) ? 1 : requested, 1), totalPages)
  const pageBlogs = blogs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const { user } = blogs[0]
  const { html_url, avatar_url, login } = user
  const renderIntroduce = () => (
    <div className="introduce">
      <img className="avatar" src={avatar_url} alt="头像" />
      <p className="desc">
        Personal blog by{' '}
        <a rel="noopener noreferrer" target="_blank" href={html_url}>
          {login}
        </a>
        . I explain with words and code.
      </p>
      <style jsx>
        {`
          .introduce {
            display: flex;
            max-width: 300px;
            margin-bottom: 56px;
          }

          .avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            margin-right: 14px;
            flex-shrink: 0;
          }

          .desc {
            margin: 0;
          }

          .desc a {
            color: var(--textLink);
          }
        `}
      </style>
    </div>
  )

  const renderBlogs = () => {
    return (
      <>
        {pageBlogs.map((blog) => {
          const { id, title } = blog
          return (
            <h3 key={id}>
              <Link href={`/${id}`} prefetch={false} className="title-link">{title}</Link>
            </h3>
          )
        })}
        {totalPages > 1 && (
          <nav className="pagination">
            {page > 1 ? (
              <Link href={page - 1 === 1 ? '/' : `/?page=${page - 1}`} prefetch={false}>
                上一页 Prev
              </Link>
            ) : (
              <span className="disabled">上一页 Prev</span>
            )}
            <span className="info">
              {page} / {totalPages}
            </span>
            {page < totalPages ? (
              <Link href={`/?page=${page + 1}`} prefetch={false}>
                下一页 Next
              </Link>
            ) : (
              <span className="disabled">下一页 Next</span>
            )}
          </nav>
        )}
        <style jsx>
          {`
            .pagination {
              display: flex;
              align-items: center;
              gap: 16px;
              margin-top: 40px;
            }

            .pagination :global(a) {
              color: var(--textLink);
              text-decoration: none;
            }

            .disabled {
              opacity: 0.4;
            }

            .title-link {
              color: var(--textLink);
              text-decoration: none;
            }
          `}
        </style>
      </>
    )
  }

  return (
    <div className="blogs">
      {renderIntroduce()}
      {renderBlogs()}
    </div>
  )
}
