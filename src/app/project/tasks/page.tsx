"use client"
import { Tasks } from '@/app/types';
import { useState } from 'react';

export default function Home() {
	const columnWidths = {
		name: '210px',
		topManagement: '210px',
		personInCharge: '210px',
		collaborativeDeployment: '210px',
		comment: '420px',
	};

	const [tasks, setTasks] = useState<Tasks[]>([
		{
			name: 'Task1',
			topManagement: 'manager A',
			personInCharge: 'Person A',
			collaborativeDeployment: 'Team B',
			comment: 'This is a comment. コメントサンプルコメントサンプルコメントサンプル'
		},
		{
			name: 'Task2',
			topManagement: 'manager B',
			personInCharge: 'Person B',
			collaborativeDeployment: 'Team C',
			comment: 'This is a comment. コメントサンプルコメントサンプルコメントサンプル'
		},
		{
			name: 'Task3',
			topManagement: 'manager C',
			personInCharge: 'Person C',
			collaborativeDeployment: 'Team D',
			comment: 'This is a comment. コメントサンプルコメントサンプルコメントサンプル'
		},
	]);

	const emptyRows = Array.from({ length: Math.max(0, 5 - tasks.length) }, (_, i) => i);
	return (
		<div className="flex items-center justify-center bg-gray-100 w-full h-screen">
			<div className="flex flex-col w-[1360] h-[800] bg-white p-5">
				<h1 className="mx-auto m-5 text-3xl ">こちらはタイトル行。こちらはタイトル行。こちらはタイトル行。</h1>
				<section className="grid grid-cols-13 grid-rows-4 w-5/6 h-[150] mx-auto">
					<h3 className="row-start-1 row-span-1 col-start-1 col-span-2 flex items-center pl-4 text-xl">コンテンツタイトル</h3>
					<select 
						className="row-start-2 row-span-1 col-start-1 col-span-2 border border-black border-solid rounded-lg px-4" 
						name="contentName" 
						id="" 
						defaultValue={`サンプル１`}
					>
						<option value="sample1">サンプル１</option>
						<option value="sample2">サンプル２</option>
						<option value="sample3">サンプル３</option>
						<option value="sample4">サンプル４</option>
					</select>
					<h3 className="row-start-1 row-span-1 col-start-4 col-end-11 flex items-center pl-4 text-xl">コンテンツ概要</h3>
					<textarea 
						className="row-start-2 row-end-5 col-start-4 col-end-11 max-w-full max-h-full border border-black border-solid rounded-lg px-4 py-2 align-top text-wrap"   
						placeholder="サンプルテキストサンプルテキストサンプルテキスト"
					/>
				</section>
				<section className="grid grid-cols-13 grid-rows-4 w-5/6 h-[450] mx-auto my-5 flex flex-col">
					<div className="table w-full border-collapse border-2 border-black border-collapse">
						<div className="table-header-group bg-blue-900 text-white">
							<div className="table-row h-[52]">
								<div className="table-cell w-[105] align-middle">操作名</div>
								{Object.keys(columnWidths).map((key, index) => (
									<div
										key={index}
										className="table-cell align-middle pl-2"
										style={{width: columnWidths[key as keyof Tasks]}}
									>{key}</div>
								))}
							</div>
						</div>
						<div className="table-row-group overflow-auto">
							{tasks.map((task, index) => (
								<div key={index} className="table-row h-[78]">
									<div key={`edit-${index}`} className="table-cell border-2 border-black align-middle pl-2">
										操作
									</div>
									{Object.entries(task).map(([key, value], i) => (
										<div key={`edit-col-${i}`} className="table-cell border-2 border-black align-middle pl-2">
											{value}
										</div>
								))}
								</div>
							))}
							{emptyRows.map((_, i) => (
								<div key={`empty-${i}`} className="table-row h-[78]">
									<div key={`edit-empty-${i}`} className="table-cell border-2 border-black align-middle"></div>
									{Object.keys(columnWidths).map((_, j) => (
										<div key={`empty-col-${j}`} className="table-cell border-2 border-black align-middle"></div>
									))}
								</div>
							))}
						</div>
					</div>
				</section>
				<form action="/" className=" mx-auto ">
					<button className="w-40 h-16 border-black border-solid rounded-lg bg-blue-800 text-white">
						ボタン
					</button>
				</form>
			</div>

		</div>
	);
}