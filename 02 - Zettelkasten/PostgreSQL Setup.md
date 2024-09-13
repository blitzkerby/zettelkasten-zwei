---
~
---

To view the list of SQL commands view this [[SQL commands]].

### ***DOWNLOAD AND INSTALLATION***


Visit the official site to download PostgreSQL.

The download wizard will prompt you to enter a superuser password. [Forgetting this password will require you to reinstall and setup PostgreSQL again.]


## ***Using PostgreSQL***

### pgAdmin
---
The download and installation comes with PgAdmin. You should be able to directly access it by searching it up on your computer. However, should it not come automatically by the download, you can always manually install it as well and set it up.


### Postgres on the terminal
---
The alternative to using pgAdmin is by directly accessing Postgres via the terminal. 

Verify if `psql` already works: open up your terminal and enter the following:

```bash
psql --version
```
> 	
> 	The result should be the current version of your Postgres application. 
> 	

But usually you are met with your ***terminal not recognizing it as an internal or external command.*** 



#### ***Adding `psql` to PATH environment variable (Windows)***
---

1. **Ensure PostgreSQL is Installed**:
    
    - Download and install PostgreSQL from the official website.
    - Follow the installation instructions and make a note of the installation directory.
      
2. **Add `psql` to the PATH Environment Variable**:
    
    - Open the Start Menu, search for “Environment Variables,” and select “Edit the system environment variables.”
    - In the System Properties window, click on the “Environment Variables” button.
    - In the Environment Variables window, find the “Path” variable in the “System variables” section and click “Edit.”
    - Click “New” and add the path to the `bin` directory of your PostgreSQL installation (e.g., `C:\Program Files\PostgreSQL\15\bin`).
    - Click “OK” to close all windows.
      
3. **Verify the Installation**:

    - Open a new Command Prompt window and type `psql --version` to check if the command is now recognized.



#### ***Connecting to a database***
---

In order to connect to a database, use the following command,

```bash
psql -d postgres -U postgres
```
>
>	-d | specifies the name of database
>	-U | specifies the username you want to connect as
>	

Once you run the command, you’ll be prompted to enter the password for the user `postgres`. Once authenticated, you’ll be connected to the postgres database and can start executing SQL queries and commands.


***WARNINGS***

1. Indication of the console code page differing from the Windows code page.
---
```text
WARNING: Console code page (437) differs from Windows code page (1252) 8-bit characters might not work correctly. See psql reference page "Notes for Windows users" for details.
```
> 
> 	Page values may vary across different users. The above is only an example.
> 

- Change the console code page to match with the Windows code page:

```bash
chcp 1252
```
>
>	1252 is used in this example.
>


* Then proceed to connect again (on the same terminal.) 

This method does not permanently set the Windows code page to match with the code page — in order to do so, one must setup a startup script or batch files to run the code above.






