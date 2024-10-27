WebEye
======

WebEye is a Django application for OSINT (Open Source Intelligence) searches, integrating various tools including **Sherlock**, **Ignorant**, **Holehe**, and **GHunt**.

Features
--------

- **Sherlock**: Searches for usernames across multiple social platforms.
- **Ignorant**: Tool for information gathering.
- **Holehe**: Checks email addresses across multiple services.
- **GHunt**: Searches for Google-related information.

Installation
------------

### Prerequisites
- Python 3.12 or higher
- Git (to clone the repository)
- Virtual environment configured for Python

### Step-by-Step Instructions

1. Clone this repository:
   
   git clone https://github.com/YOUR_USERNAME/WebEye.git
   cd WebEye

2. Create and activate the virtual environment:

   python3 -m venv venv
   source venv/bin/activate

3. Install the dependencies:

   pip install -r requirements.txt

4. Set up and migrate the database:

   python manage.py migrate

5. Start the server:

   python manage.py runserver

   Then access the server at http://localhost:8000.

Usage
-----

Access the WebEye web interface and choose one of the available OSINT search tools to perform your searches.

Contribution
------------

Contributions are welcome! Feel free to open issues or submit pull requests.

License
-------

This project is licensed under the MIT License.
