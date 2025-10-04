import Portfolio from './src/screens/Portfolio';
import FontProvider from './src/utils/FontProvider';

export default function App() {
	return (
		<>
			<FontProvider>
				<Portfolio />
			</FontProvider>
		</>
	);
}