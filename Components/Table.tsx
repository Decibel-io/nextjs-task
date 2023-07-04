"use client";

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./Table.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Container } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.grey[100],
		color: theme.palette.common.black,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(() => ({
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
};

interface Call {
	id: number;
	call_type: string;
	direction: string;
	from: string;
	to: string;
	via: string;
	duration: number;
	created_at: string;
	notes: { id: number; content: string }[]; // Add a notes property to the Call interface
	is_archived: boolean;
}

export default function Tables() {
	const [open, setOpen] = useState(false);
	const [callsData, setCallsData] = useState<Call[]>([]);
	const [selectedCallId, setSelectedCallId] = useState<number | null>(null);
	const [selectedCallData, setSelectedCallData] = useState<Call | null>(null);
	const [noteContent, setNoteContent] = useState('');
	const [filter, setFilter] = useState("All"); // Add state for the filter
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const openFilter = Boolean(anchorEl);
	const itemsPerPage = 5; // Number of items to display per page
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const handleClickFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseFilter = () => {
		setAnchorEl(null);
	};

	const handleOpen = async (callId: number) => {
		setSelectedCallId(callId);
		await fetchCallData(callId);
		setOpen(true);
	};

	const handleClose = () => setOpen(false);

	const fetchUserCallsData = async () => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				console.error("Access token not found in localStorage");
				return;
			}
			const offset = (currentPage - 1) * itemsPerPage;

			let url = `https://frontend-test-api.aircall.io/calls?offset=${offset}&limit=${itemsPerPage}`;

			const response = await fetch(url, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.ok) {
				const data = await response.json();
				// Process the data returned from the API
				// console.log(data);
				setCallsData(data.nodes);
				setTotalPages(Math.ceil(data.totalCount / itemsPerPage));
			} else {
				// Handle the error response
				console.error("API request failed with status:", response.status);
			}
		} catch (error) {
			// Handle any network or other errors
			console.error("Error occurred while making the API request:", error);
		}
	};

	useEffect(() => {
		fetchUserCallsData();
	}, [currentPage, itemsPerPage]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const renderPaginationLinks = () => {
		const links = [];

		for (let page = 1; page <= totalPages; page++) {
			links.push(
				<button
					key={page}
					onClick={() => handlePageChange(page)}
					disabled={currentPage === page}
					className={styles.number}
					style={{
						backgroundColor: currentPage === page ? 'black' : 'transparent',
						color: currentPage === page ? 'white' : 'black',
						fontWeight: currentPage === page ? 'bold' : 'normal',
					}}
				>
					{page}
				</button>
			);
		}

		return links;
	};

	const fetchCallData = async (callId: number) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				console.error("Access token not found in localStorage");
				return;
			}

			const response = await fetch(
				`https://frontend-test-api.aircall.io/calls/${callId}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			if (response.ok) {
				const data: Call = await response.json();
				// Process the fetched call data as needed
				setSelectedCallData(data);
			} else {
				// Handle the error response
				console.error("API request failed with status:", response.status);
			}
		} catch (error) {
			// Handle any network or other errors
			console.error("Error occurred while making the API request:", error);
		}
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, "0");
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const year = date.getFullYear().toString();
		return `${day}-${month}-${year}`;
	};

	const getCallTypeColor = (callType: string) => {
		if (callType === "missed") {
			return "#d34661";
		} else if (callType === "voicemail") {
			return "#001664";
		} else if (callType === "answered") {
			return "#3cd0c1";
		}
		return "black";
	};

	const handleArchiveButtonClick = async (callId: number) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				console.error("Access token not found in localStorage");
				return;
			}

			const response = await fetch(
				`https://frontend-test-api.aircall.io/calls/${callId}/archive`,
				{
					method: "PUT",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			if (response.ok) {
				console.log(`Archived call with ID ${callId}`);

				// Reset the database by refetching the calls data
				fetchUserCallsData();
			} else {
				console.error("API request failed with status:", response.status);
			}
		} catch (error) {
			console.error("Error occurred while making the API request:", error);
		}
	};

	const handleUnarchiveButtonClick = async (callId: number) => {
		try {
			const token = localStorage.getItem("token");
			if (!token) {
				console.error("Access token not found in localStorage");
				return;
			}

			const response = await fetch(
				`https://frontend-test-api.aircall.io/calls/${callId}/archive`,
				{
					method: "PUT",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			if (response.ok) {
				console.log(`Unarchived call with ID ${callId}`);

				// Reset the database by refetching the calls data
				fetchUserCallsData();
			} else {
				console.error("API request failed with status:", response.status);
			}
		} catch (error) {
			console.error("Error occurred while making the API request:", error);
		}
	};

	const handleAddNote = async () => {
		setOpen(false);

		try {
			const token = localStorage.getItem('token');
			if (!token) {
				console.error('Access token not found in localStorage');
				return;
			}

			const apiUrl = `https://frontend-test-api.aircall.io/calls/${selectedCallId}/note`;
			const noteData = {
				content: noteContent,
			};

			const response = await fetch(apiUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(noteData),
			});

			if (response.ok) {
				console.log('Note added successfully');
				// Perform any additional operations
			} else {
				console.error('Failed to add note:', response.statusText);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleFilterChange = (event: React.MouseEvent<HTMLLIElement>) => {
		setFilter(event.currentTarget.textContent || ""); // Update the filter state based on the selected value
	};

	const filterCalls = (calls: Call[]): Call[] => {
		if (filter === "All") {
			return calls;
		} else if (filter === "Archived") {
			return calls.filter((call) => !call.is_archived);
		} else if (filter === "Unarchive") {
			return calls.filter((call) => call.is_archived);
		}
		return calls;
	};

	const formatDuration = (duration: number) => {
		const minutes = Math.floor(duration / 60000); // Convert milliseconds to minutes
		const seconds = Math.floor((duration % 60000) / 1000); // Get the remaining seconds

		return `${minutes} minutes ${seconds} seconds`;
	};

	return (
		<>
			<span
				id={styles["basic-button"]}
				aria-controls={openFilter ? "basic-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={openFilter ? "true" : undefined}
				onClick={handleClickFilter}>
				Status
			</span>

			<Menu
				id={styles["basic-menu"]}
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleCloseFilter}
			>
				<MenuItem onClick={handleFilterChange} data-filter="All">All</MenuItem>
				<MenuItem onClick={handleFilterChange} data-filter="Archived">Archived</MenuItem>
				<MenuItem onClick={handleFilterChange} data-filter="Unarchived">Unarchive</MenuItem>
			</Menu>

			<Container>
				<TableContainer
					component={Paper}
					style={{ marginTop: "1%" }}>
					<Table
						sx={{ minWidth: 700 }}
						aria-label='customized table'>
						<TableHead sx={{ textTransform: "uppercase" }}>
							<TableRow>
								<StyledTableCell>Call Type</StyledTableCell>
								<StyledTableCell align='left'>Direction</StyledTableCell>
								<StyledTableCell align='left'>Duration</StyledTableCell>
								<StyledTableCell align='left'>From</StyledTableCell>
								<StyledTableCell align='left'>To</StyledTableCell>
								<StyledTableCell align='left'>Via</StyledTableCell>
								<StyledTableCell align='left'>Created At</StyledTableCell>
								<StyledTableCell align='left'>Status</StyledTableCell>
								<StyledTableCell align='left'>Action</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody sx={{ textTransform: "capitalize" }}>
							{filterCalls(callsData).map((call, index) => (
								<StyledTableRow key={index}>
									<StyledTableCell
										component='th'
										scope='row'
										// onClick={() => handleCallClick(call.id)}
										style={{ color: getCallTypeColor(call.call_type) }} // Set the text color based on the call type
									>
										{call.call_type}
									</StyledTableCell>
									<StyledTableCell align='left' sx={{ color: "#001664" }}>
										{call.direction}
									</StyledTableCell>
									<StyledTableCell align='left'>
										<span>{formatDuration(call.duration)}</span>
										<br />
										<span className={styles.duration}>({call.duration} seconds)</span>
										{/* 80 minutes 23 seconds <br /> (4823 seconds) */}
									</StyledTableCell>
									<StyledTableCell align='left'>{call.from}</StyledTableCell>
									<StyledTableCell align='left'>{call.to}</StyledTableCell>
									<StyledTableCell align='left'>{call.via}</StyledTableCell>
									<StyledTableCell align='left'>
										{formatDate(call.created_at)}
									</StyledTableCell>
									<StyledTableCell align='left'>
										{call.is_archived ? (
											<button
												onClick={() => handleUnarchiveButtonClick(call.id)}
												className={styles.unarchive}>
												Unarchive
											</button>
										) : (
											<button
												onClick={() => handleArchiveButtonClick(call.id)}
												className={styles.archive}>
												Archive
											</button>
										)}
									</StyledTableCell>
									<StyledTableCell align='left'>
										<button
											className={styles.addNote}
											onClick={() => handleOpen(call.id)}>
											Add Note
										</button>
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>

				<div className={styles.alinment}>
					<button onClick={handlePrevPage} disabled={currentPage === 1} className={styles.paginationBtn}>
						<ArrowBackIosIcon />
					</button>

					{/* Render the pagination links */}
					{renderPaginationLinks()}

					<button onClick={handleNextPage} disabled={currentPage === totalPages} className={styles.paginationBtn}>
						<NavigateNextIcon style={{ fontSize: "25px" }} />
					</button>
				</div>

			</Container>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<button
						className={styles.close}
						onClick={handleClose}>
						X
					</button>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'>
						Add Notes
					</Typography>
					<span
						id='modal-modal-description'
						style={{ marginTop: "2px" }}>
						Call ID {selectedCallId}
					</span>

					<div className={styles.border} />

					<div>
						{selectedCallId && selectedCallData && (
							<div className={styles.popup}>
								<div className={styles.m5}>
									<div className={styles.pb10}>call Type</div>
									<div className={styles.pb10}>duration</div>
									<div className={styles.pb10}>From</div>
									<div className={styles.pb10}>to</div>
									<div className={styles.pb10}>via</div>
								</div>
								<div className={styles.m5}>
									<div
										className={styles.pb10}
										style={{
											textTransform: "capitalize",
											color: getCallTypeColor(selectedCallData.call_type),
										}}>
										{selectedCallData.call_type}
									</div>
									<div className={styles.pb10}>
										{selectedCallData.duration}
									</div>
									<div className={styles.pb10}>
										{selectedCallData.from}
									</div>
									<div className={styles.pb10}>
										{selectedCallData.to}
									</div>
									<div className={styles.pb10}>
										{selectedCallData.via}
									</div>
								</div>
							</div>
						)}
					</div>

					<div style={{ paddingBottom: "13px" }}>Notes</div>

					<textarea
						placeholder="Add Notes"
						rows={4}
						cols={50}
						value={noteContent}
						onChange={(e) => setNoteContent(e.target.value)}
						style={{ padding: "10px" }}
					/>

					<div className={styles.border} />

					<button className={styles.saveBtn} onClick={handleAddNote}>Save</button>
				</Box>
			</Modal>
		</>
	);
}
