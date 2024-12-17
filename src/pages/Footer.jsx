
function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adeoluwa Gbenro. All rights reserved.</p>
          <p className="mt-2">Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
