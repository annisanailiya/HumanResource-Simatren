export function getPegawaiStatus(status) {
	switch (status) {
		case 'Aktif':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100 font-semibold">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'Tidak Aktif':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-red-500 bg-red-100 font-semibold">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'Cuti':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100 font-semibold">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'SELESAI':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100 font-semibold">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'PROSES':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100 font-semibold">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'BELUM DIMULAI':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-red-500 bg-red-100 font-semibold">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		default:
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100 font-semibold">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}