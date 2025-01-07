import Image from "next/image";
import { junit } from "node:test/reporters";
import React from "react";

export default function Home() {

	// const columnWidths = {
	// 	work: '600px',
	// 	team: '210px',
	// 	topManagement: '210px',
	// 	collaborativeDeployment: '210px',
	// };

	// const [work, setWorks] = useState<Works[]>([
	// 	{
	// 		work: 'Work1',
	// 		team: 'mainTeam1',
	// 		topManagement: 'manager A',
	// 		collaborativeDeployment: 'collaborativeTeam B',
	// 	},
	// 	{
	// 		work: 'Work2',
	// 		team: 'mainTeam2',
	// 		topManagement: 'manager B',
	// 		collaborativeDeployment: 'collaborativeTeam B',
	// 	},
	// 	{
	// 		work: 'Work3',
	// 		team: 'mainTeam2',
	// 		topManagement: 'manager B',
	// 		collaborativeDeployment: 'collaborativeTeam B',
	// 	},
	// ]);

	const tasks = Array.from({ length: 5 });
	// 日付データ（1～31日分）
	const january = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
	const february = Array.from({ length: 28 }, (_, i) => (i + 1).toString());
	const days = ["日", "月", "火", "水", "木", "金", "土"]; // 曜日データ
	return (
		<div className="flex items-center justify-center bg-gray-100 w-full h-screen">
			<div className="flex flex-col items-center justify-center w-[1600] h-[800] bg-white shadow-lg p-4 justify-evenly">
				{/* ガントチャート */}
				<div className="flex items-center flex-col w-5/6 h-[320]" >
					<div className="flex w-full h-[60]">
						<h2 className="flex items-center text-2xl w-[450]">ガントチャート</h2>
						<div className="flex items-center w-1/2">
							<div className="flex items-center w-1/3">
								<div className="w-[20] h-[20] bg-green-400 mr-2"></div>
								プロジェクト
							</div>
							<div className="flex items-center w-1/3">
								<div className="w-[20] h-[20] bg-blue-400 mr-2"></div>
								タスク
							</div>
						</div>
					</div>
					{/* 表の部分 */}
					<div className="w-full h-[300px] ml-4">
						<div
							className="grid border-r border-black"
							style={{
								gridTemplateColumns: `210px 80px 130px auto`,
								gridTemplateRows: `30px 30px 30px auto`,
								gridTemplateAreas: `
									"blank blank blank scrollable"
									"project project project scrollable"
									"title-task title-duration title-task-progress scrollable"
									${tasks.map((_,i) => 
										`"task${i} duration${i} task-progress${i} scrollable"`
									).join(" ")}`,
							}}
						>
							{/* 固定部分 */}
							<div className="bg-blue-900 border-l border-t border-b border-black" style={{ gridArea: "blank" }}></div>
							<div
								className="bg-blue-900 p-2 text-white border-l border-b border-black"
								style={{ gridArea: "project" }}
							>
								プロジェクト
							</div>
							<div
								className="bg-blue-900 p-2 pl-6 text-white border-l border-b border-r border-black"
								style={{ gridArea: "title-task" }}
							>
								タスク名
							</div>
							<div
								className="bg-blue-900 p-2 text-center text-white border-b border-r border-black"
								style={{ gridArea: "title-duration" }}
							>
								期間
							</div>
							<div
								className="bg-blue-900 p-2 pl-4 text-white border-b border-black"
								style={{ gridArea: "title-task-progress" }}
							>
								進捗
							</div>
							{tasks.map((_, i) => (
								<React.Fragment key={`react-fragment${i}`}>
									<div
										key={`empty-task${i}`}
										className="px-1 py-1  border-l border-b border-r border-black text-[13px]"
										style={{ 
											gridArea: `task${i}`,
											height: "30px",
											...(i === tasks.length - 1 && { marginBottom: "16px" }),
										}}
									>
										{i === 0 && (
											<div className="flex items-center">
												<div 
													className="mx-1"
													style={{
														width:"9px",
														height:"9px",
														clipPath:"polygon(0 0, 100% 50%, 0 100%)",
														backgroundColor:"gray",
													}}>
												</div>
												<div
													style={{
													}}>
													テキストテキストテキスト
												</div>
											</div>
										)}
										{i === 1 && (
											<div className="flex items-center">
												<div 
													className="mx-1"
													style={{
														width:"9px",
														height:"9px",
														clipPath:"polygon(0 0, 100% 50%, 0 100%)",
														backgroundColor:"gray",
													}}>
												</div>
												<div
													style={{
													}}>
													テキストテキストテキスト
												</div>
											</div>
										)}
									</div>
									<div
										key={`empty-duration${i}`}
										className="px-2 py-0.5 border-b border-r border-black text-[14px]"
										style={{
											gridArea: `duration${i}`,
											height: "30px",
											...(i === tasks.length - 1 && { marginBottom: "16px" }),
										}}
									>
										{i === 0 && (
											<React.Fragment>
												<div className="text-center">
													1/1~1/2
												</div>
											</React.Fragment>
										)}
										{i === 1 && (
											<React.Fragment>
												<div className="text-center">
													1/2~1/13
												</div>
											</React.Fragment>
										)}
									</div>
									<div
										key={`empty-task-progress${i}`}
										className="px-2 border-b border-black"
										style={{
											gridArea: `task-progress${i}`,
											height: "30px",
											...(i === tasks.length - 1 && { marginBottom: "16px" }),
										}}
									>
									</div>
								</React.Fragment>
							))}
							
							{/* 日付・曜日部分 - スクロール可能 */}
							<div className="overflow-x-scroll border-b border-l border-black" style={{gridArea: "scrollable",}} >
								<div 
										className="grid"
										style={{ 
											gridTemplateColumns: `${january.length *30}px ${february.length *30}px`
										}}>
									<div
										className="flex items-center bg-blue-900 w-full p-2 text-white border-r border-t border-b border-black"
										style={{
											height:"30px",
											width: `${january.length * 30 }px`,
										}}
									>
										１月

									</div>
									<div
										className="flex items-center bg-blue-900 p-2 text-white border-r border-t border-b border-black"
										style={{
											height:"30px",
											width: `${february.length * 30 }px`,
										}}
									>
										２月
									</div>
								</div>
								<div style={{ gridArea: "title-dates" }}>
									<div
										className="grid"
										style={{ 
											gridTemplateColumns: `repeat(${january.length + february.length}, 30px)`
										}}
									>
										{january.map((date) => (
											<div
												key={`date-jun-${date}`}
												className="text-center border-b border-r border-black bg-blue-900 p-2 text-white"
												style={{ width: "30px", height: "30px" }}
											>
												{date}
											</div>
										))}
										{february.map((date) => (
											<div
												key={`date-feb-${date}`}
												className="text-center border-b border-r border-black bg-blue-900 p-2 text-white"
												style={{ width: "30px", height: "30px" }}
											>
												{date}
											</div>
										))}
									</div>
								</div>
								{/* 曜日部分 */}
								<div
									style={{ gridArea: "day-dates" }}
								>
									<div
										className="grid"
										style={{ gridTemplateColumns: `repeat(${january.length + february.length}, 30px)` }}
									>
										{january.map((_, i) => (
											<div
												key={`weekday-jun${i}`}
												className="text-center border-b border-r border-black bg-blue-900 p-2 text-white"
												style={{ width: "30px", height: "30px" }}
											>
												{days[(i+3)% 7]} {/* 曜日データを繰り返し表示 */}
											</div>
										))}
										{february.map((_, i) => (
											<div
												key={`weekday-feb${i}`}
												className="text-center border-b border-r border-black bg-blue-900 p-2 text-white"
												style={{ width: "30px", height: "30px" }}
											>
												{days[(i+6)% 7]} {/* 曜日データを繰り返し表示 */}
											</div>
										))}
									</div>
								</div>
								{/* 空白行 */}
								{tasks.map((_, rowIndex) => (
									<div
										key={`empty-row${rowIndex}`}
										style={{ gridArea: "dates" }}
									>
										<div
											key={`empty-grid-row${rowIndex}`}
											className="grid"
											style={{ gridTemplateColumns: `repeat(${january.length + february.length}, 30px)` }}
										>
											{january.map((_, colIndex) => (
												<div
													key={`empty-jun-${rowIndex}-${colIndex}`}
													className="text-center border border-dotted border-gray-100 bg-white"
													style={{ 
														width: "30px",
														height: "30px",
														...(rowIndex === tasks.length - 1 && 
															{ 
																borderBottom: "1px",
																borderBottomStyle: "solid",
																borderBottomColor: "black",
															}),
														...((colIndex < 2 && rowIndex === 0 ) && {
															backgroundColor: "#40d87b",
															border: "0",
														}),
														...((colIndex > 0 && colIndex < 13 && rowIndex === 1 ) && {
															backgroundColor: "#40d87b",
															border: "0",
														})
													}}
												>
												</div>
											))}
											{february.map((_, colIndex) => (
												<div
													key={`empty-feb-${rowIndex}-${colIndex}`}
													className="text-center border border-dotted border-gray-100 bg-white"
													style={{ 
														width: "30px",
														height: "30px",
														...(rowIndex === tasks.length - 1 && 
															{ 
																borderBottom: "1px",
																borderBottomStyle: "solid",
																borderBottomColor: "black",
															}),
													}}
												>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* ボタン */}
				<form action="/project/tasks" className=" mx-auto flex bg-red100 w-5/6 h-[80] justify-evenly">
					<button className="w-40 h-16 border-black border-solid rounded-lg bg-blue-800 text-white">ボタン１</button>
					<button className="w-40 h-16 border-black border-solid rounded-lg bg-blue-800 text-white">ボタン２</button>
					<button className="w-40 h-16 border-black border-solid rounded-lg bg-blue-800 text-white">ボタン３</button>
				</form>

				{/* 組織体制表 */}
				<div className="flex items-center flex-col bg-blue-100 w-5/6 h-[280]" >
					<div className="flexbg-green-100 w-full h-[60]">
						<h2 className="flex items-center justify-start text-2xl w-1/2">組織体制表</h2>
					</div>
					<div className="w-full h-[240] my-2 ml-6">
						表を作成
						{/* <div
							className="grid"
							style={{
								gridTemplateColumns: `
								${columnWidths.map((key,index) => 
									`${index}`
								).join(" ")}`,
								gridTemplateRows: `30px 30px 30px auto`,
								gridTemplateAreas: `
									"blank blank blank Month"
									"project project project scrollable"
									"title-task title-duration title-task-progress scrollable"
									${tasks.map((_,i) => 
										`"task${i} duration${i} task-progress${i} scrollable"`
									).join(" ")}`,
							}}
						> */}

						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
