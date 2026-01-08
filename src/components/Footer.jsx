
const Footer = () => {
return (
<footer className="py-8 bg-gray-50 dark:bg-gray-900  text-gray-600 dark:text-gray-400">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
<p className="text-sm text-gray-500 mb-4 md:mb-0">2026 Sharda Jha. Built with ❤️ using React </p>

<div className="flex gap-4">
<a
href="https://github.com/"
target="_blank"
className="hover: text-blue-500 transition-colors"
aria-label="GitHub"
>
GitHub
</a>
<a 
href="mailto:shardakumari96115@gmail.com"
className="hover:text-red-500 transition-colors"
aria-label="Email"
>
 Email
</a>
</div>
</div>
</footer>
)
}
export default Footer;