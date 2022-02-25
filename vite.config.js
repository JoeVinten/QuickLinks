import react from "@vitejs/plugin-react"
import path from "path"
import glob from "glob"

// https://vitejs.dev/config/
export default {
	plugins: [react()],
	root: path.join(__dirname, "src"),
	build: {
		outDir: path.join(__dirname, "dist"),
		rollupOptions: {
			input: glob.sync(path.resolve(__dirname, "src", "*.html")),
		},
	},
}
